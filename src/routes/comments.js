const express = require("express");
const router = express.Router();
const commentService = require("../services/comments.service");
const { validateCommentData, validateCommentDataUpdate } = require("../validators/comments.validator");
const { validationResult } = require("express-validator");

router.post("/", validateCommentData, async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.array());
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newComment = await commentService.createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el comentario" });
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await commentService.getAllComment();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los comentarios" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await commentService.getCommentsById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el comentario" });
  }
});

router.put("/:id", validateCommentDataUpdate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedComment = await commentService.upadateComment(req.params.id, req.body);
    if (!updatedComment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el comentario" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await commentService.deleteComment(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }
    res.json({ message: "Comentario eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el comentario" });
  }
});

module.exports = router;
