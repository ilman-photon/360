export class Regex {
  static lengthRegex = /^[^\s]{8,20}$/;
  static numberRegex = /\d/;
  static alphabethOnly = /^[a-zA-Z]+$/;
  static numberOnly = /^\d*$/;
  static upperCaseRegex = /[A-Z]/;
  static lowerCaseRegex = /[a-z]/;
  static alphabethRegex = /[A-Za-z]/;
  static alphaNumericRegex = /^[a-z0-9]+$/i;
  static specialRegex = /[$&+,:;=/?@#|'<>.^*()%!\]\[{}\\\-\~]/;
  static hasTripleRegex = /([a-z\\d])\\1\\1/;
  static isValidPhoneFormat = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/i;
  static nameValidation = /^(?=.*[a-zA-Z])([a-zA-Z0-9,_\-.\s]+)$/;
  static emailValidation = /^[A-Za-z0-9._%±]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/;
  static REGEX_PHONE_NUMBER = /^\d{10,}$/;
  static REGEX_PHONE_NUMBER_ONLY = /^\d{10}$/;
  static noWhitespaceRegex = /[^\s-]/;
  static isTenDigitPhone = /^(\d{3})(\d{3})(\d{4})$/;
  static isImageFile = /(image\/(png|jpg|jpeg))/;
  static imageJpgPng = /(image\/(png|jpg))/;
  static isMin2Max50Length = /^\w{2,50}$/;
  static maskingEmail = /^(..)(.*)(@.*)$/;
  static isZip = /^\s?\d{5}\s?$/;
  static atLeastOneAlphabet = /(?=.*?[A-Za-z])/;
}
