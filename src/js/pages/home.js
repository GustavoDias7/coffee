import { contactFactory } from "../factories/factory";
import { schema } from "../utils/schema";
import Vue from "../vendor/vue";

new Vue({
  el: "#app",
  data: {
    contact: {
      name: "",
      email: "",
      message: "",
    },
    errors: {
      name: "",
      email: "",
      message: "",
    },
    touched: {
      name: false,
      email: false,
      message: false,
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
            this.touched = { name: false, email: false, message: false };
            this.openModal("contact");
          }, 3000);
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.touched[error.path] = true;
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
    onChange({ target }) {
      if (this.touched[target.name]) this.validate(target.name);
    },
    onBlur({ target }) {
      if (!this.touched[target.name]) this.touched[target.name] = true;
      this.validate(target.name);
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
