const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");
const authenticateToken = require("../utils/authMiddleware");

router.get("/", authenticateToken, journalController.getEntries);

router.post("/", authenticateToken, journalController.createEntry);
router.get("/", authenticateToken, journalController.getEntries);
router.get("/:id", authenticateToken, journalController.getEntryById);
router.put("/:id", authenticateToken, journalController.updateEntry);
router.delete("/:id", authenticateToken, journalController.deleteEntry);

module.exports = router;
