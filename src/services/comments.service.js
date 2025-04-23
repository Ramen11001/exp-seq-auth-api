const e = require("express");
const { Comment } = require("../models");


const getComment = async (queryOptions = {}) => {
  return await Comment.findAll(queryOptions);
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
  getComment,
  getCommentsById,
  createComment,
  upadateComment,
  deleteComment
};
