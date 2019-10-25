export default interface IUser {
  hashPassword?: () => void;
  checkIfUnencryptedPasswordIsValid?: (unencryptedPassword: string) => Promise<boolean> ;
}
