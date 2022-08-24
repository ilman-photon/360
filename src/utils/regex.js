export class Regex {
  static lengthRegex = /^[^\s]{8,20}$/;
  static numberRegex = /\d/;
  static upperCaseRegex = /[A-Z]/;
  static lowerCaseRegex = /[a-z]/;
  static alphabethRegex = /[A-Za-z]/;
  static specialRegex = /[$&+,:;=?@#|'<>.^*()%!\]\[{}\\\-\~]/;
  static hasTripleRegex = /([a-z\\d])\\1\\1/;
  static hasAlpahabet = /^([A-Za-z ])+$/i;
  static isValidPhoneFormat = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/i;
  static noSpecialRegex = /^[a-z0-9]+$/gi;
  static isEmailCorrect = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
  static REGEX_PHONE_NUMBER = /^\d{10,}$/;
  static noWhitespaceRegex = /[^\s-]/;
  static isImageFile = /(image\/(png|jpg|jpeg))/gi;
}
