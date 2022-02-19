const express = require('express');
const route = express.Router()

const Checkout = require('../models/checkout.model')

router.get("/:id/not_checkedout", async (req, res) => {
    try {
      const sections = await Section.findById(req.params.id)
        .populate({
          path: "books_id",
          select: { is_checked: false, book_name: 1 },
        })
        .lean()
        .exec(); //db.users => mongoose object => json object (thennable) i.e. why .lean().exec()
      return res.send(sections);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

module.exports = route