import { contactFactory } from "../factories/factory";
import { schema } from "../utils/schema";
import Vue from "../vendor/vue";

var app = new Vue({
  el: "#app",
  data: {
    contact: {
      name: "",
      message: "",
      email: "",
    },
    errors: {
      name: "",
      message: "",
      email: "",
    },
  },
  methods: {
    handleContact() {
      const contact = contactFactory(this.contact);
      schema
        .validate(contact, { abortEarly: false })
        .then(() => {
          const submittedData = `${this.contact.name} ${this.contact.message}`;
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
  },
});
