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

const AdminHomeProducts = ({
  productCategories,
  featuredModels,
  technologyHighlights,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
  activeType,
  setActiveType,
}) => {
  // Table headers for each type
  const headers = {
    categories: ["Title", "Description", "Features", "Popular", "Actions"],
    featured: ["Model", "Type", "Efficiency", "Price", "Features", "Actions"],
    technology: ["Technology Name", "Actions"],
  };

  // Data for each type
  const dataMap = {
    categories: productCategories,
    featured: featuredModels,
    technology: technologyHighlights,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          Manage Home Page Products
        </h2>
        <div className="flex gap-2 items-center">
          <Select value={activeType} onValueChange={setActiveType}>
            <SelectTrigger className="w-[200px] bg-white/10 text-white border-white/20">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              <SelectItem value="categories">Product Categories</SelectItem>
              <SelectItem value="featured">Featured Models</SelectItem>
              <SelectItem value="technology">Technology Highlights</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={onAddProduct}>
            <Plus className="w-4 h-4 mr-2" />
            Add New{" "}
            {activeType === "categories"
              ? "Category"
              : activeType === "featured"
              ? "Model"
              : "Technology"}
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
                {activeType === "categories" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.title}
                    </TableCell>
                    <TableCell className="text-white/80 max-w-xs truncate">
                      {item.description}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {item.features?.slice(0, 2).join(", ")}
                      {item.features?.length > 2 && "..."}
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
                      {item.features?.slice(0, 2).join(", ")}
                      {item.features?.length > 2 && "..."}
                    </TableCell>
                  </>
                )}
                {activeType === "technology" && (
                  <>
                    <TableCell className="text-white font-medium">
                      {item.name}
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

export default AdminHomeProducts;
