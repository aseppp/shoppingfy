const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.status(201).send({
      status: 'success',
      message: 'category created',
      data: {
        result: category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};

exports.categories = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.status(200).send({
      status: 'success',
      message: 'success fetching category',
      data: {
        result: category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      status: 'success',
      message: 'success fetching category',
      data: {
        result: category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};

exports.updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });

    res.status(200).send({
      status: 'success',
      message: 'category updated',
      data: {
        result: category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};

exports.deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: 'success',
      message: 'category deleted',
      data: {
        result: category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};
