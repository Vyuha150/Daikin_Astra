import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";
import React from "react";

const ServiceDialog = ({ isOpen, onClose, onSubmit, initialData }) => {
  const getInitialForm = React.useCallback(() => {
    return {
      title: "",
      description: "",
      features: [],
    };
  }, []);

  const [form, setForm] = useState(getInitialForm());

  useEffect(() => {
    if (initialData) setForm({ ...getInitialForm(), ...initialData });
    else setForm(getInitialForm());
  }, [initialData, isOpen, getInitialForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "features") {
      setForm({ ...form, features: value.split(",").map((f) => f.trim()) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border border-border">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Service" : "Add New Service"}
          </DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Service Title</Label>
            <Input
              id="title"
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter service title"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter service description"
              rows={4}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="features">Features (comma separated)</Label>
            <Textarea
              id="features"
              name="features"
              value={(form.features || []).join(", ")}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter features separated by commas"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update" : "Add"} Service
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
