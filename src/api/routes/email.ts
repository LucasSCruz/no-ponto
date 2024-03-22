import express, { Request, Response } from "express";
import { RegistrationConfirmationEmailUseCase } from "../../usecases/email";
import { EmailService } from "../../external/email/emailService";

const router = express.Router();

const emailService = new EmailService()
const registrationConfirmationUseCase = new RegistrationConfirmationEmailUseCase(emailService);


router.post('/', async (req: Request, res: Response) => {
    const userEmail = req.body.email;

    if (!userEmail) {
        return res.status(400).json({ success: false, message: 'E-mail do usuário não fornecido.' });
    }

    try {
       await registrationConfirmationUseCase.execute(userEmail);
    } catch (error) {
        console.error('Erro ao enviar e-mail de confirmação:', error);
        return res.status(500).json({ success: false, message: 'Ocorreu um erro ao enviar o e-mail de confirmação.' });
    }
});


module.exports = router;
