import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const AddEditDialog = ({ isOpen, onClose, type, item }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[500px] bg-background border border-border">
      <DialogHeader>
        <DialogTitle className="text-foreground">
          {item ? `Edit ${type}` : `Add New ${type}`}
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* ...existing code for dialog fields... */}
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose}>
          {item ? "Update" : "Add"} {type}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default AddEditDialog;
