import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import {User, userRole} from "../entities/User";

export class CreateAdminUser1571849091255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.username = "admin";
    user.password = "admin";
    await user.hashPassword();
    user.role = userRole.ADMIN;
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
