import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

   
    if (contacts.length > 0) {
     
      contacts.pop();

     
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
      console.log();
    } else {
      console.log();
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();