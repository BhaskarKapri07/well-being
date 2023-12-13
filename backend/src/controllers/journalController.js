const JournalEntry = require("../models/journalEntryModel");

exports.createEntry = async (req, res) => {
  try {
    const { title, content } = req.body;
    // console.log("User Id from req.user: ", req.user.userId);
    const userId = req.user.userId; 

    const newEntry = new JournalEntry({ userId, title, content });
    await newEntry.save();

    res
      .status(201)
      .json({ message: "Journal entry created successfully", entry: newEntry });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating journal entry", error: error.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const userId = req.user.userId;
    const entries = await JournalEntry.find({ userId });

    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching journal entries",
      error: error.message,
    });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entryId = req.params.id;
    const entry = await JournalEntry.findById(entryId);

    if (!entry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json(entry);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching journal entry", error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entryId = req.params.id;
    const { title, content } = req.body;

    const updatedEntry = await JournalEntry.findByIdAndUpdate(
      entryId,
      { title, content },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({
      message: "Journal entry updated successfully",
      entry: updatedEntry,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating journal entry", error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entryId = req.params.id;

    const deletedEntry = await JournalEntry.findByIdAndDelete(entryId);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({ message: "Journal entry deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting journal entry", error: error.message });
  }
};
