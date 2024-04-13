import express, { Request, Response } from "express";
import contacts from "./data/contacts.json";
import {
  calculateAge,
  extractNumbers,
  removeSpecialChars,
} from "./utils/utilsFunctions";
import { Contact } from "./types/dataTypes";

const router = express.Router();

router.get("/allContacts", async (req: Request, res: Response) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send("Server error while get all contacts");
  }
});

router.get("/searchContacts", async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.q;
    if (searchQuery) {
      const foundContacts = filterContactsBySearchQuery(searchQuery.toString());

      res.setHeader("Access-Control-Allow-Origin", "*");

      res.status(200).json(foundContacts);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server error while search contacts");
  }
});

function filterContactsBySearchQuery(searchQuery: string): Contact[] {
  let foundContacts = [];
  const keywords = searchQuery.toString().toLowerCase().split(" ");

  foundContacts = contacts.filter((contact) => {
    const age = calculateAge(contact.birthday);
    const phoneNumber = extractNumbers(contact.phone_number);
    const address = removeSpecialChars(contact.address);
    let countFoundKeyWords = 0;

    keywords.forEach((keyword) => {
      const cleanKeyword = removeSpecialChars(keyword);
      const regexExactWord = new RegExp("\\b" + cleanKeyword + "\\b");

      const isFound =
        regexExactWord.test(contact.name.toLowerCase()) ||
        regexExactWord.test(phoneNumber) ||
        regexExactWord.test(address.toLowerCase()) ||
        regexExactWord.test(age.toString());

      countFoundKeyWords = isFound
        ? countFoundKeyWords + 1
        : countFoundKeyWords;
    });

    return countFoundKeyWords === keywords.length;
  });

  return foundContacts;
}

export default router;
