import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен складатись мінімум із 5-ти символів').isLength({ min: 5 }),
]

export const registerValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен складатись мінімум із 5-ти символів').isLength({ min: 5 }),
    body('fullName', 'Вкажіть ПІБ').isLength({ min: 3 }),
    body('avatarUrl', 'Невірне посилання на аватарку').optional().isURL(),
]

export const postCreateValidation = [
    body('title', 'Введіть заголовок статті').isLength({ min: 3 }).isString(),
    body('text', 'Введіть текст статті').isLength({ min: 3 }).isString(),
    body('tags', 'Неправильний формат тегів').optional().isString(),
    body('imageUrl', 'Неправильне посилання на зображення').optional().isString(),
]