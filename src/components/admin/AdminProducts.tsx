import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import DatabaseImage from "../ui/database-image";
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
import UnitDialog from "./UnitDialog";

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showUnitsView, setShowUnitsView] = useState(false);
  const [showUnitDialog, setShowUnitDialog] = useState(false);
  const [editingUnit, setEditingUnit] = useState(null);
  const [editingUnitIndex, setEditingUnitIndex] = useState(null);

  // Functions for managing individual units within categories
  const handleViewUnits = (category) => {
    setSelectedCategory(category);
    setShowUnitsView(true);
  };

  const handleAddUnit = () => {
    setEditingUnit(null);
    setEditingUnitIndex(null);
    setShowUnitDialog(true);
  };

  const handleEditUnitClick = (unit, index) => {
    setEditingUnit(unit);
    setEditingUnitIndex(index);
    setShowUnitDialog(true);
  };

  const handleUnitSubmit = (unitData) => {
    if (!selectedCategory) return;

    const updatedUnits = [...(selectedCategory.units || [])];

    if (editingUnitIndex !== null) {
      // Editing existing unit
      updatedUnits[editingUnitIndex] = unitData;
    } else {
      // Adding new unit
      updatedUnits.push(unitData);
    }

    const updatedCategory = {
      ...selectedCategory,
      units: updatedUnits,
    };

    onEditProduct(updatedCategory);
    setSelectedCategory(updatedCategory);
    setShowUnitDialog(false);
    setEditingUnit(null);
    setEditingUnitIndex(null);
  };

  const handleDeleteUnit = (unitIndex) => {
    if (!selectedCategory) return;

    const updatedUnits = (selectedCategory.units || []).filter(
      (_, index) => index !== unitIndex
    );

    const updatedCategory = {
      ...selectedCategory,
      units: updatedUnits,
    };

    onEditProduct(updatedCategory);
    setSelectedCategory(updatedCategory);
  };

  const handleBackToCategories = () => {
    setShowUnitsView(false);
    setSelectedCategory(null);
  };

  // Table headers for each type
  const headers = {
    category: [
      "Image",
      "Title",
      "Description",
      "Features",
      "Popular",
      "Actions",
    ],
    featured: [
      "Image",
      "Model",
      "Type",
      "Efficiency",
      "Price",
      "Features",
      "Actions",
    ],
    outdoor: [
      "Image",
      "Type",
      "Capacity",
      "Model",
      "Description",
      "Features",
      "Actions",
    ],
    indoor: ["Category", "Units Count", "Actions"],
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
                    <TableCell className="text-white">
                      <DatabaseImage
                        type="category"
                        id={item._id || item.id}
                        thumbnail={true}
                        className="w-12 h-12 object-cover rounded"
                        alt={item.title}
                        isAdmin={true}
                      />
                    </TableCell>
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
                    <TableCell className="text-white">
                      <DatabaseImage
                        type="featured"
                        id={item._id || item.id}
                        thumbnail={true}
                        className="w-12 h-12 object-cover rounded"
                        alt={item.model}
                        isAdmin={true}
                      />
                    </TableCell>
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
                    <TableCell className="text-white">
                      <DatabaseImage
                        type="outdoor"
                        id={item._id || item.id}
                        thumbnail={true}
                        className="w-12 h-12 object-cover rounded"
                        alt={item.model}
                        isAdmin={true}
                      />
                    </TableCell>
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
                    <TableCell className="text-white/80">
                      {item.units?.length || 0} units
                    </TableCell>
                  </>
                )}
                <TableCell>
                  <div className="flex space-x-2">
                    {activeType === "indoor" ? (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-400/20 text-blue-400 hover:bg-blue-500/10"
                          onClick={() => handleViewUnits(item)}
                        >
                          View Units
                        </Button>
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
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Units View Dialog/Overlay */}
      {showUnitsView && selectedCategory && (
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 mt-6">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <Button
                  variant="outline"
                  onClick={handleBackToCategories}
                  className="mb-4 border-white/20 text-white hover:bg-white/10"
                >
                  ← Back to Categories
                </Button>
                <h3 className="text-xl font-bold text-white">
                  Manage Units: {selectedCategory.category}
                </h3>
              </div>
              <Button onClick={handleAddUnit}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Unit
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white">Image</TableHead>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Model</TableHead>
                  <TableHead className="text-white">Capacity</TableHead>
                  <TableHead className="text-white">Features</TableHead>
                  <TableHead className="text-white">Applications</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(selectedCategory.units || []).map((unit, index) => (
                  <TableRow key={index} className="border-white/20">
                    <TableCell className="text-white">
                      {unit.image ? (
                        <img
                          src={`data:image/jpeg;base64,${unit.image}`}
                          alt={unit.name || "Unit"}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-white/50 text-xs">
                          No Image
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-white font-medium">
                      {unit.name || ""}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {unit.model || ""}
                    </TableCell>
                    <TableCell className="text-white/80">
                      {unit.capacity || ""}
                    </TableCell>
                    <TableCell className="text-white/80 max-w-xs">
                      <div className="truncate">
                        {unit.features?.length > 0
                          ? unit.features.slice(0, 2).join(", ") +
                            (unit.features.length > 2 ? "..." : "")
                          : ""}
                      </div>
                    </TableCell>
                    <TableCell className="text-white/80 max-w-xs">
                      <div className="truncate">
                        {unit.applications?.length > 0
                          ? unit.applications.slice(0, 2).join(", ") +
                            (unit.applications.length > 2 ? "..." : "")
                          : ""}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                          onClick={() => handleEditUnitClick(unit, index)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-400/20 text-red-400 hover:bg-red-500/10"
                          onClick={() => handleDeleteUnit(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Unit Dialog */}
      <UnitDialog
        isOpen={showUnitDialog}
        onClose={() => {
          setShowUnitDialog(false);
          setEditingUnit(null);
          setEditingUnitIndex(null);
        }}
        onSubmit={handleUnitSubmit}
        initialData={editingUnit}
      />
    </div>
  );
};

export default AdminProducts;
