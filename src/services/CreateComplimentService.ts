import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import SendMail from "./utils/SendMail";
import { resolve } from "path";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const tagsRepositories = getCustomRepository(TagsRepositories);

    const userSenderExists = await usersRepositories.findOne(user_sender);

    if (!userSenderExists) {
      throw new Error("User Sender does not exists!");
    }

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    const tag = await tagsRepositories.findOne(tag_id);

    const variables = {
      tag: tag.name,
      message: compliment.message,
      userSender: userSenderExists.name,
    };

    const indexPath = resolve(__dirname, "..", "views", "emails", "compliment.hbs");

    await SendMail.send(userSenderExists.email, tag.name, variables, indexPath);

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}
export { CreateComplimentService };
