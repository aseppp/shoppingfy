const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('../utils/cloudinary');

exports.create = async (req, res) => {
  const { name, note } = req.body;

  try {
    const existProduct = await prisma.product.findUnique({
      where: {
        name: name,
      },
    });

    if (existProduct) {
      res.status(400).send({
        status: 'Failed',
        message: 'Product already exist',
      });
    } else {
      const picture = await cloudinary.uploader.upload(req.file.path, {
        folder: 'real-ecommerce',
        use_filename: true,
        unique_filename: true,
      });

      const productData = await prisma.product.create({
        data: {
          name: name,
          note: note,
          image: picture.public_id,
        },
      });

      res.status(200).send({
        status: 'Success',
        message: 'Create Product Success',
        data: {
          result: {
            productData,
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'server Error',
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).send({
      status: 'success',
      message: 'success fetching products',
      data: {
        result: products,
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

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      status: 'success',
      message: 'success fetching products',
      data: {
        result: product,
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

exports.updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, note, image } = req.body;

    const product = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        note: note,
        image: image,
      },
    });

    res.status(200).send({
      status: 'success',
      message: 'product updated',
      data: {
        result: product,
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

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: 'success',
      message: 'product deleted',
      data: {
        result: product,
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
