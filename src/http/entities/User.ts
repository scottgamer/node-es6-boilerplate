import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import bcrypt from "bcryptjs";
import IUser from "../interfaces/IUser";

export enum userRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

@Entity()
@Unique(["username"])
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "enum", enum: userRole })
  role: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8)
  }

  async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return await bcrypt.compare(unencryptedPassword, this.password);
  }
}
