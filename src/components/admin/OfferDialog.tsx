import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";

const OfferDialog = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    title: "",
    discount: "",
    description: "",
    validity: "",
    features: [],
    popular: false,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        features: initialData.features || [],
        popular: initialData.popular || false,
      });
    } else {
      setForm({
        title: "",
        discount: "",
        description: "",
        validity: "",
        features: [],
        popular: false,
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "features") {
      setForm({ ...form, features: value.split(",") });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
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
          <DialogTitle className="text-foreground">
            {initialData ? "Edit Offer" : "Add New Offer"}
          </DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-foreground">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="border border-gray-400"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="discount" className="text-foreground">
              Discount
            </Label>
            <Input
              id="discount"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              className="border border-gray-400"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="border border-gray-400"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="validity" className="text-foreground">
              Validity
            </Label>
            <Input
              id="validity"
              name="validity"
              value={form.validity}
              onChange={handleChange}
              className="border border-gray-400"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="features" className="text-foreground">
              Features (comma separated)
            </Label>
            <Input
              id="features"
              name="features"
              value={form.features.join(",")}
              onChange={handleChange}
              className="border border-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="popular"
              name="popular"
              checked={form.popular}
              onChange={handleChange}
            />
            <Label htmlFor="popular" className="text-foreground">
              Popular
            </Label>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update" : "Add"} Offer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;
