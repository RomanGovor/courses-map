import { dbClient } from "@/shared/lib/db";
import { UserEntity, UserId } from "@/entities/user/_domain/types";

export class UserRepository {
  async getUserById(userId: UserId): Promise<UserEntity> {
    return await dbClient.user.findUniqueOrThrow({ where: { id: userId } });
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({ data: user });
  }
}

export const userRepository = new UserRepository();
