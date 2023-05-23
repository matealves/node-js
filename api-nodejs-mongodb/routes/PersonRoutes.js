const router = require("express").Router();
const Person = require("../models/Person");

// CREATE
router.post("/", async (req, res) => {
  // destructing {name: "Mateus", salary: 5000, admin: true}
  const { name, salary, admin } = req.body;

  if (!name || !salary || !admin) {
    res.status(422).json({
      error:
        "Todos os campos são obrigatórios, favor enviar 'name', 'salary' e 'admin'.",
    });
    return;
  }

  const newPerson = {
    name,
    salary,
    admin,
  };

  // create of mongoose
  try {
    await Person.create(newPerson);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const peoples = await Person.find();
    res.status(200).json({
      message: "Success",
      data: peoples,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Person.findOne({ _id: id });

  if (!user) {
    res.status(422).json({ message: "Usuário não encontrado." });
    return;
  }

  try {
    res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE (PUT, PATCH)
// PUT = ESPERA OBJETO COMPLETO
// PATCH = ATUALIZAÇÃO PARCIAL
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, salary, admin } = req.body;

  const newPerson = {
    name,
    salary,
    admin,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, newPerson);
    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado." });
    }

    res.status(200).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Person.findOne({ _id: id });

  if (!user) {
    res.status(422).json({ message: "Usuário não encontrado." });
    return;
  }

  try {
    await Person.deleteOne({ _id: id });

    res.status(200).json({
      message: "Usuário removido com sucesso.",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
