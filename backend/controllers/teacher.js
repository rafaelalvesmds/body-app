const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Cadastro de professor
router.post('/teacher', async (req, res) => {
    const teacherData = req.body; // Recebe o modelo completo

    try {
        const existingTeacher = await prisma.teacher.findUnique({
            where: { email: teacherData.email },
        });

        if (existingTeacher) {
            return res.status(400).json({ error: 'E-mail already in use by a teacher' });
        }

        const teacher = await prisma.teacher.create({
            data: teacherData,
        });

        res.status(201).json(teacher);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Teacher creation failed', details: error.message });
    }
});

// Atualização de professor
router.put('/teacher/:id', async (req, res) => {
    const { id } = req.params;
    const teacherData = req.body; // Recebe o modelo completo

    try {
        // Verifica se o professor existe antes de atualizar
        const teacher = await prisma.teacher.update({
            where: { id: parseInt(id) },
            data: teacherData,
        });

        res.json(teacher);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Teacher update failed', details: error.message });
    }
});

// Exclusão de professor
router.delete('/teacher/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.teacher.delete({
            where: { id: parseInt(id) },
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Teacher deletion failed', details: error.message });
    }
});

module.exports = router;
