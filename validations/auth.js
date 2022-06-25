import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Невірний формат пошти').isEmail(),
    body('password', 'Пароль повинен складатись мінімум із 5-ти символів').isLength({ min : 5}),
    body('fullName', 'Вкажіть ПІБ').isLength({ min : 3}),
    body('avatarUrl', 'Невірне посилання на аватарку').optional().isURL(),
]