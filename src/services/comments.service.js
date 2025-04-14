const e = require("express");
const { Comment } = require("../models");

const getAllComment = async () => {
  return await Comment.findAll();
};

const getCommentsById = async (id) => {
  return await Comment.findByPk(id);
};
const createComment = async (data) => {
  return await Comment.create(data); 
};

const upadateComment  = async (id, data) => {
  const comments = await Comment.findByPk(id);
  if (comments) {
    return await comments.update(data); 
  }
  return null;
};

const deleteComment = async (id) => {
  const comments = await Comment.findByPk(id);
  if(!comments){
    return null;
  }

await comments.destroy();
return { message: "Comentario eliminado exitosamente" };
};

module.exports = {
  getAllComment,
  getCommentsById,
  createComment,
  upadateComment,
  deleteComment
};
