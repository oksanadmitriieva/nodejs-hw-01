// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';
// Импортируем функцию createFakeContact, которая создаёт фейковый контакт
import { createFakeContact } from '../utils/createFakeContact.js';

// Определяем асинхронную функцию addOneContact для добавления одного нового контакта
export const addOneContact = async () => {
  try {
    // Читаем данные из файла базы данных контактов
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсим данные из JSON-формата в объект
    const contacts = JSON.parse(data);

    // Создаём новый фейковый контакт
    const newContact = createFakeContact();

    // Добавляем новый контакт в массив контактов
    contacts.push(newContact);

    // Записываем обновлённый массив контактов обратно в файл базы данных
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    // Выводим сообщение об успешном добавлении контакта
    console.log('Successfully added one new contact.');
  } catch (error) {
    // Обрабатываем ошибки, возникающие при добавлении контакта, и выводим сообщение об ошибке
    console.error('Error adding contact:', error);
  }
};

// Вызываем функцию addOneContact и ждём её выполнения
await addOneContact();
