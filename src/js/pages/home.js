import { contactFactory } from "../factories/factory";
import { schema } from "../utils/schema";
import Vue from "../vendor/vue";

var app = new Vue({
  el: "#app",
  data: {
    contact: {
      name: "Name",
      email: "emial@email.com",
      message: "test message",
    },
    errors: {
      name: "",
      email: "",
      message: "",
    },
    modals: {
      contact: false,
    },
    loading: {
      contact: false,
    },
  },
  methods: {
    handleContact() {
      const contact = contactFactory(this.contact);
      schema
        .validate(contact, { abortEarly: false })
        .then(() => {
          this.handleLoading("contact", true);
          setTimeout(() => {
            this.handleLoading("contact", false);
            this.contact = contactFactory({});
            this.openModal("contact");
          }, 3000);
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    validate(field) {
      schema
        .validateAt(field, this.contact)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
    isValid(field = "") {
      return this.errors[field] ? "invalid" : "";
    },
    openModal(modalName = "") {
      modalName && (this.modals[modalName] = true);
    },
    closeModal(modalName = "") {
      modalName && (this.modals[modalName] = false);
    },
    handleLoading(loadingName, isLoading) {
      this.loading[loadingName] = isLoading;
    },
  },
});
