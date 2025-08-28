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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Edit, Trash2, Plus } from "lucide-react";

const AdminProducts = ({
  productCategories,
  featuredModels,
  outdoorUnits,
  indoorUnitCategories,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
  activeType,
  setActiveType,
}) => {
  // Table headers for each type
  const headers = {
    category: ["Title", "Description", "Features", "Popular", "Actions"],
    featured: ["Model", "Type", "Efficiency", "Price", "Features", "Actions"],
    outdoor: [
      "Type",
      "Capacity",
      "Model",
      "Description",
      "Features",
      "Actions",
    ],
    indoor: ["Category", "Actions"],
  };

  // Data for each type
  const dataMap = {
    category: productCategories,
    featured: featuredModels,
    outdoor: outdoorUnits,
    indoor: indoorUnitCategories,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Products</h2>
        <div className="flex gap-2 items-center">
          <Select value={activeType} onValueChange={setActiveType}>
            <SelectTrigger className="w-[200px] bg-white/10 text-white border-white/20">
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="featured">Featured Model</SelectItem>
              <SelectItem value="outdoor">Outdoor Unit</SelectItem>
              <SelectItem value="indoor">Indoor Unit Category</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={onAddProduct}>
            <Plus className="w-4 h-4 mr-2" />
            Add New {activeType.charAt(0).toUpperCase() + activeType.slice(1)}
          </Button>
        </div>
      </div>
      <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
        <Table>
          <TableHeader>
            <TableRow className="border-white/20">
              {headers[activeType].map((h) => (
                <TableHead key={h} className="text-white">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataMap[activeType].map((item) => (
              <TableRow key={item._id || item.id} className="border-white/20">
                {activeType === "category" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.title}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.description}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.features?.join(", ")}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.popular ? "Yes" : "No"}
                    </TableCell>
                  </>
                )}
                {activeType === "featured" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.model}
                    </TableCell>
                    <TableCell className="text-white/80">{item.type}</TableCell>
                    <TableCell className="text-white/80">
                      {item.efficiency}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.price}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.features?.join(", ")}
                    </TableCell>
                  </>
                )}
                {activeType === "outdoor" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.type}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.capacity}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.model}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.description}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.features?.join(", ")}
                    </TableCell>
                  </>
                )}
                {activeType === "indoor" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.category}
                    </TableCell>
                  </>
                )}
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => onEditProduct(item)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-400/20 text-red-400 hover:bg-red-500/10"
                      onClick={() => onDeleteProduct(item._id || item.id)}
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
};

export default AdminProducts;
