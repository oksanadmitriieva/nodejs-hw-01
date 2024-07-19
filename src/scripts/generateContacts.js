// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';
// Импортируем функцию createFakeContact, которая создаёт фейковый контакт
import { createFakeContact } from '../utils/createFakeContact.js';

// Определяем асинхронную функцию generateContacts для генерации указанного количества новых контактов
const generateContacts = async (number) => {
  try {
    // Читаем данные из файла базы данных контактов
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсим данные из JSON-формата в объект
    const contacts = JSON.parse(data);

    // Создаём массив для новых контактов
    const newContacts = [];
    // Генерируем указанное количество новых контактов и добавляем их в массив
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    // Обновляем массив контактов, добавляя к существующим новым контакты
    const updatedContacts = [...contacts, ...newContacts];

    // Записываем обновлённый массив контактов обратно в файл базы данных
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    // Выводим сообщение об успешном добавлении контактов
    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    // Обрабатываем ошибки, возникающие при обновлении контактов, и выводим сообщение об ошибке
    console.error('Error updating contacts:', error);
  }
};

// Вызываем функцию generateContacts с параметром 5 и ждём её выполнения
await generateContacts(5);
