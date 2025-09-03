import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import ImageUpload from "../ui/image-upload";
import { useState, useEffect } from "react";
import React from "react";

interface ImageData {
  data: string;
  contentType: string;
  filename: string;
  size: number;
}

interface Unit {
  id?: string;
  name?: string;
  model?: string;
  capacity?: string;
  features?: string[];
}

interface FormData {
  title?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  model?: string;
  type?: string;
  efficiency?: string;
  price?: string;
  capacity?: string;
  category?: string;
  units?: Unit[];
  image?: ImageData | null;
  thumbnail?: ImageData | null;
}

const ProductDialog = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: FormData;
  type: string;
}) => {
  // Memoize getInitialForm to avoid useEffect dependency warning
  const getInitialForm = React.useCallback((): FormData => {
    const baseForm: FormData = {
      image: null,
      thumbnail: null,
    };

    switch (type) {
      case "category":
        return {
          ...baseForm,
          title: "",
          description: "",
          features: [],
          popular: false,
        };
      case "featured":
        return {
          ...baseForm,
          model: "",
          type: "",
          efficiency: "",
          price: "",
          features: [],
        };
      case "outdoor":
        return {
          ...baseForm,
          type: "",
          capacity: "",
          model: "",
          description: "",
          features: [],
        };
      case "indoor":
        return {
          ...baseForm,
          category: "",
          units: [],
        };
      default:
        return baseForm;
    }
  }, [type]);

  const [form, setForm] = useState<FormData>(getInitialForm());

  useEffect(() => {
    if (initialData) setForm({ ...getInitialForm(), ...initialData });
    else setForm(getInitialForm());
  }, [initialData, isOpen, type, getInitialForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type: inputType } = e.target;
    const checked = "checked" in e.target ? e.target.checked : false;

    if (name === "features") {
      setForm({ ...form, features: value.split(",") });
    } else if (inputType === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleImageChange = (image: ImageData | null) => {
    setForm({
      ...form,
      image,
      thumbnail: image ? { ...image } : null,
    });
  };

  // Render fields based on type
  let fields = null;
  if (type === "category") {
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
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="features">Features (comma separated)</Label>
          <Input
            id="features"
            name="features"
            value={(form.features || []).join(",")}
            onChange={handleChange}
            className="border border-gray-400"
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
          <Label htmlFor="popular">Popular</Label>
        </div>
        <ImageUpload
          value={form.image}
          onChange={handleImageChange}
          label="Category Image"
        />
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
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="features">Features (comma separated)</Label>
          <Input
            id="features"
            name="features"
            value={(form.features || []).join(",")}
            onChange={handleChange}
            className="border border-gray-400"
          />
        </div>
        <ImageUpload
          value={form.image}
          onChange={handleImageChange}
          label="Model Image"
        />
      </>
    );
  } else if (type === "outdoor") {
    fields = (
      <>
        <div className="grid gap-2">
          <Label htmlFor="type">Type</Label>
          <Input
            id="type"
            name="type"
            value={form.type || ""}
            onChange={handleChange}
            className="border border-gray-400"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            id="capacity"
            name="capacity"
            value={form.capacity || ""}
            onChange={handleChange}
            className="border border-gray-400"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            name="model"
            value={form.model || ""}
            onChange={handleChange}
            className="border border-gray-400"
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
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="features">Features (comma separated)</Label>
          <Input
            id="features"
            name="features"
            value={(form.features || []).join(",")}
            onChange={handleChange}
            className="border border-gray-400"
          />
        </div>
        <ImageUpload
          value={form.image}
          onChange={handleImageChange}
          label="Unit Image"
        />
      </>
    );
  } else if (type === "indoor") {
    fields = (
      <>
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            value={form.category || ""}
            onChange={handleChange}
            className="border border-gray-400"
            placeholder="Enter category name"
          />
        </div>
        <div className="grid gap-2">
          <Label>Units (JSON format)</Label>
          <Textarea
            name="units"
            value={JSON.stringify(form.units || [], null, 2)}
            onChange={(e) => {
              try {
                const units = JSON.parse(e.target.value);
                setForm({ ...form, units });
              } catch (error) {
                // Invalid JSON, ignore for now
                console.log("Invalid JSON format");
              }
            }}
            className="border border-gray-400 font-mono text-sm"
            placeholder='[{"name": "Unit Name", "model": "Model123", "capacity": "3.5kW", "features": ["Feature1", "Feature2"], "applications": ["App1", "App2"]}]'
            rows={8}
          />
          <div className="text-xs text-gray-500">
            Enter units as JSON array. Each unit should have: name, model,
            capacity, features (array), applications (array)
          </div>
        </div>
      </>
    );
  }

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
            {initialData ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          {fields}
          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update" : "Add"} Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
