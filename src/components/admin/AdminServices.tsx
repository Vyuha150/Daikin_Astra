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

const AdminServices = ({
  services,
  onAddService,
  onEditService,
  onDeleteService,
}) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Manage Services</h2>
      <Button onClick={onAddService}>
        <Plus className="w-4 h-4 mr-2" />
        Add New Service
      </Button>
    </div>
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
      <Table>
        <TableHeader>
          <TableRow className="border-white/20">
            <TableHead className="text-white">Service</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white">Features</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service._id} className="border-white/20">
              <TableCell className="text-white font-medium">
                {service.title}
              </TableCell>
              <TableCell className="text-white/80 max-w-xs truncate">
                {service.description}
              </TableCell>
              <TableCell className="text-white/80">
                {service.features?.slice(0, 2).join(", ")}
                {service.features?.length > 2 && "..."}
              </TableCell>
              <TableCell>
                <Badge className="bg-green-500/20 text-green-400">Active</Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => onEditService(service)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-400/20 text-red-400 hover:bg-red-500/10"
                    onClick={() => onDeleteService(service._id)}
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
  </div>
);

export default AdminServices;
