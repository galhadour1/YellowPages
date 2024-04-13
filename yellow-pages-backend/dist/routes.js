"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_json_1 = __importDefault(require("./data/contacts.json"));
const utilsFunctions_1 = require("./utils/utilsFunctions");
const router = express_1.default.Router();
router.get("/allContacts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(contacts_json_1.default);
    }
    catch (error) {
        res.status(500).send("Server error while get all contacts");
    }
}));
router.get("/searchContacts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchQuery = req.query.q; //TODO get all queries
        if (searchQuery) {
            const keywords = searchQuery.toString().toLowerCase().split(' ');
            const foundContacts = contacts_json_1.default.filter(contact => {
                const age = (0, utilsFunctions_1.ageToDate)(parseInt(contact.birthday));
                return (keywords.some(keyword => contact.name.toLowerCase().includes(keyword) ||
                    contact.phone_number.includes(keyword) ||
                    contact.address.toLowerCase().includes(keyword) ||
                    age.toLowerCase().includes(keyword)));
            });
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(foundContacts);
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send("Server error while search contacts");
    }
}));
exports.default = router;
//# sourceMappingURL=routes.js.map