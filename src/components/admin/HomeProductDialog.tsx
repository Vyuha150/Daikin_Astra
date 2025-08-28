import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";
import React from "react";

const HomeProductDialog = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  type,
}) => {
  // type: 'categories' | 'featured' | 'technology'

  // Memoize getInitialForm to avoid useEffect dependency warning
  const getInitialForm = React.useCallback(() => {
    switch (type) {
      case "categories":
        return {
          title: "",
          description: "",
          features: [],
          popular: false,
        };
      case "featured":
        return {
          model: "",
          type: "",
          efficiency: "",
          price: "",
          features: [],
        };
      case "technology":
        return {
          name: "",
        };
      default:
        return {};
    }
  }, [type]);

  const [form, setForm] = useState(getInitialForm());

  useEffect(() => {
    if (initialData) setForm({ ...getInitialForm(), ...initialData });
    else setForm(getInitialForm());
  }, [initialData, isOpen, type, getInitialForm]);

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    if (name === "features") {
      setForm({ ...form, features: value.split(",").map((f) => f.trim()) });
    } else if (inputType === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Render fields based on type
  let fields = null;
  if (type === "categories") {
    fields = (
      <>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter category title"
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
            placeholder="Enter category description"
            rows={3}
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
            rows={2}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="popular"
            name="popular"
            checked={form.popular || false}
            onChange={handleChange}
          />
          <Label htmlFor="popular">Popular Category</Label>
        </div>
      </>
    );
  } else if (type === "featured") {
    fields = (
      <>
        <div className="grid gap-2">
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            name="model"
            value={form.model || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter model name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="type">Type</Label>
          <Input
            id="type"
            name="type"
            value={form.type || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter model type"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="efficiency">Efficiency</Label>
          <Input
            id="efficiency"
            name="efficiency"
            value={form.efficiency || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter efficiency rating"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter price"
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
            rows={2}
          />
        </div>
      </>
    );
  } else if (type === "technology") {
    fields = (
      <>
        <div className="grid gap-2">
          <Label htmlFor="name">Technology Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter technology name"
            required
          />
        </div>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  const getTitle = () => {
    const typeNames = {
      categories: "Category",
      featured: "Featured Model",
      technology: "Technology Highlight",
    };
    return `${initialData ? "Edit" : "Add New"} ${typeNames[type]}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border border-border">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          {fields}
          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{initialData ? "Update" : "Add"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HomeProductDialog;
