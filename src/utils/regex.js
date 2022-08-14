export class Regex {
  static lengthRegex = /^[^\s]{8,20}$/;
  static numberRegex = /[0-9]/;
  static upperCaseRegex = /[A-Z]/;
  static lowerCaseRegex = /[a-z]/;
  static alphabethRegex = /[A-Za-z]/;
  static specialRegex = /[$&+,:;=?@#|'<>.^*()%!\]\[{}\\\-\~]/;
  static hasTripleRegex = /([a-z\\d])\\1\\1/;
  static hasAlpahabet = /^([A-Za-z ])+$/i;
  static isValidPhoneFormat = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i;
  static noSpecialRegex = /^[a-z0-9]+$/gi;
}
