import express from "express";
import { createNotesdata, getNotesdata, getNotesById, updateNotesdata , deleteNotesdata} from "../controller/NotesController.js";

const router = express.Router();

//endpoint get semua data notes
router.get('/notesdata', getNotesdata);

//endpoint get by id
router.get("/notes/:id", getNotesById);

//endpoint create data notes
router.post('/tambah-notes', createNotesdata);

//endpoint update data user
router.put("/edit-notes/:id", updateNotesdata);

//endpoint delete data user
router.delete("/delete-notes/:id", deleteNotesdata);

export default router;
