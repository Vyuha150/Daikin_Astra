import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import OfferDialog from "./OfferDialog";

const AdminOffers = ({ offers, onAddOffer, onEditOffer, onDeleteOffer }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);

  const handleAddClick = () => {
    setEditingOffer(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (offer) => {
    setEditingOffer(offer);
    setIsDialogOpen(true);
  };

  const handleDialogSubmit = (data) => {
    if (editingOffer) {
      onEditOffer(editingOffer._id, data);
    } else {
      onAddOffer(data);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Offers</h2>
        <Button onClick={handleAddClick}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Offer
        </Button>
      </div>
      <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
        <Table>
          <TableHeader>
            <TableRow className="border-white/20">
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Valid Until</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer._id || offer.id} className="border-white/20">
                <TableCell className="text-white font-medium">
                  {offer.title}
                </TableCell>
                <TableCell className="text-white/80">
                  {offer.description}
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500/20 text-green-400">
                    {offer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-white/80">
                  {offer.validUntil}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => handleEditClick(offer)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-400/20 text-red-400 hover:bg-red-500/10"
                      onClick={() => onDeleteOffer(offer._id || offer.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <OfferDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleDialogSubmit}
        initialData={editingOffer}
      />
    </div>
  );
};

export default AdminOffers;
