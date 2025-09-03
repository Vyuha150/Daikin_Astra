import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import ImageUpload from "../ui/image-upload";

const UnitDialog = ({ isOpen, onClose, onSubmit, initialData = null }) => {
  const [form, setForm] = useState({
    name: "",
    model: "",
    capacity: "",
    features: [],
    applications: [],
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        model: "",
        capacity: "",
        features: [],
        applications: [],
        image: "",
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "features" || name === "applications") {
      // Handle empty string case
      if (value.trim() === "") {
        setForm({ ...form, [name]: [] });
      } else {
        setForm({
          ...form,
          [name]: value
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item !== ""),
        });
      }
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
            {initialData ? "Edit Unit" : "Add New Unit"}
          </DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Unit Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter unit name"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              name="model"
              value={form.model}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter model number"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="capacity">Capacity</Label>
            <Input
              id="capacity"
              name="capacity"
              value={form.capacity}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="e.g., 3.5kW"
            />
          </div>

          <div className="grid gap-2">
            <Label>Unit Image</Label>
            <ImageUpload
              value={
                form.image
                  ? {
                      data: form.image,
                      contentType: "image/jpeg",
                      filename: "unit-image.jpg",
                      size: 0,
                    }
                  : undefined
              }
              onChange={(imageData) =>
                setForm({ ...form, image: imageData?.data || "" })
              }
              label="Upload unit image"
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

          <div className="grid gap-2">
            <Label htmlFor="applications">Applications (comma separated)</Label>
            <Textarea
              id="applications"
              name="applications"
              value={(form.applications || []).join(", ")}
              onChange={handleChange}
              className="border border-gray-400"
              placeholder="Enter applications separated by commas"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update Unit" : "Add Unit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UnitDialog;
