import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен состояить как минимум из 5 символов').isLength({ min: 5 }),
  body('fullName', 'Имя должно состояить как минимум из 3 символов').isLength({ min: 3 }),
  body('avatarURL', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен состояить как минимум из 5 символов').isLength({ min: 5 }),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи более 3-х символов').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи более 10-ти символов').isLength({ min: 10 }).isString(),
  body('tags', 'Неверный формат тэгов (укажите массив)').optional().isString(),
  body('avatarURL', 'Неверная ссылка на аватарку').optional().isURL(),
];
