import { useState, useEffect, useCallback } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Users,
  ShoppingBag,
  Star,
  Calendar,
  TrendingUp,
  LogOut,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AdminOffers from "../components/admin/AdminOffers";
import AdminProducts from "../components/admin/AdminProducts";
import AdminServices from "../components/admin/AdminServices";
import AdminHomeProducts from "../components/admin/AdminHomeProducts";
import ProductDialog from "../components/admin/ProductDialog";
import ServiceDialog from "../components/admin/ServiceDialog";
import HomeProductDialog from "../components/admin/HomeProductDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const { admin, logout, token } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeProductType, setActiveProductType] = useState("category");
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [activeHomeProductType, setActiveHomeProductType] =
    useState("categories");
  const [isHomeProductDialogOpen, setIsHomeProductDialogOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  // Helper function to get headers with auth token
  const getAuthHeaders = useCallback(
    () => ({
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }),
    [token]
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Product Categories CRUD
  const [productCategories, setProductCategories] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/products/categories`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setProductCategories(data))
        .catch((err) => console.error("Failed to fetch categories:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddCategory = async (category) => {
    const res = await fetch(`${API_URL}/api/admin/products/categories`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(category),
    });
    const newCategory = await res.json();
    setProductCategories([...productCategories, newCategory]);
  };

  const handleEditCategory = async (id, updates) => {
    const res = await fetch(`${API_URL}/api/admin/products/categories/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    const updated = await res.json();
    setProductCategories(
      productCategories.map((cat) => (cat._id === id ? updated : cat))
    );
  };

  const handleDeleteCategory = async (id) => {
    await fetch(`${API_URL}/api/admin/products/categories/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setProductCategories(productCategories.filter((cat) => cat._id !== id));
  };

  // Featured Models CRUD
  const [featuredModels, setFeaturedModels] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/products/featured-models`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setFeaturedModels(data))
        .catch((err) => console.error("Failed to fetch featured models:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddFeaturedModel = async (model) => {
    const res = await fetch(`${API_URL}/api/admin/products/featured-models`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(model),
    });
    const newModel = await res.json();
    setFeaturedModels([...featuredModels, newModel]);
  };

  const handleEditFeaturedModel = async (id, updates) => {
    const res = await fetch(
      `${API_URL}/api/admin/products/featured-models/${id}`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      }
    );
    const updated = await res.json();
    setFeaturedModels(
      featuredModels.map((model) => (model._id === id ? updated : model))
    );
  };

  const handleDeleteFeaturedModel = async (id) => {
    await fetch(`${API_URL}/api/admin/products/featured-models/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setFeaturedModels(featuredModels.filter((model) => model._id !== id));
  };

  // Outdoor Units CRUD
  const [outdoorUnits, setOutdoorUnits] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/products/outdoor-units`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setOutdoorUnits(data))
        .catch((err) => console.error("Failed to fetch outdoor units:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddOutdoorUnit = async (unit) => {
    const res = await fetch(`${API_URL}/api/admin/products/outdoor-units`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(unit),
    });
    const newUnit = await res.json();
    setOutdoorUnits([...outdoorUnits, newUnit]);
  };

  const handleEditOutdoorUnit = async (id, updates) => {
    const res = await fetch(
      `${API_URL}/api/admin/products/outdoor-units/${id}`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      }
    );
    const updated = await res.json();
    setOutdoorUnits(
      outdoorUnits.map((unit) => (unit._id === id ? updated : unit))
    );
  };

  const handleDeleteOutdoorUnit = async (id) => {
    await fetch(`${API_URL}/api/admin/products/outdoor-units/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setOutdoorUnits(outdoorUnits.filter((unit) => unit._id !== id));
  };

  // Indoor Unit Categories CRUD
  const [indoorUnitCategories, setIndoorUnitCategories] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/products/indoor-units`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setIndoorUnitCategories(data))
        .catch((err) => console.error("Failed to fetch indoor units:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddIndoorUnitCategory = async (category) => {
    const res = await fetch(`${API_URL}/api/admin/products/indoor-units`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(category),
    });
    const newCategory = await res.json();
    setIndoorUnitCategories([...indoorUnitCategories, newCategory]);
  };

  const handleEditIndoorUnitCategory = async (id, updates) => {
    const res = await fetch(
      `${API_URL}/api/admin/products/indoor-units/${id}`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      }
    );
    const updated = await res.json();
    setIndoorUnitCategories(
      indoorUnitCategories.map((cat) => (cat._id === id ? updated : cat))
    );
  };

  const handleDeleteIndoorUnitCategory = async (id) => {
    await fetch(`${API_URL}/api/admin/products/indoor-units/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setIndoorUnitCategories(
      indoorUnitCategories.filter((cat) => cat._id !== id)
    );
  };

  // Unified Product handlers
  const handleAddProduct = () => {
    setEditingItem(null);
    setIsProductDialogOpen(true);
  };

  const handleEditProduct = (item) => {
    setEditingItem(item);
    setIsProductDialogOpen(true);
  };

  const handleDeleteProduct = (id) => {
    switch (activeProductType) {
      case "category":
        handleDeleteCategory(id);
        break;
      case "featured":
        handleDeleteFeaturedModel(id);
        break;
      case "outdoor":
        handleDeleteOutdoorUnit(id);
        break;
      case "indoor":
        handleDeleteIndoorUnitCategory(id);
        break;
    }
  };

  const handleProductSubmit = (formData) => {
    if (editingItem) {
      // Edit existing product
      switch (activeProductType) {
        case "category":
          handleEditCategory(editingItem._id, formData);
          break;
        case "featured":
          handleEditFeaturedModel(editingItem._id, formData);
          break;
        case "outdoor":
          handleEditOutdoorUnit(editingItem._id, formData);
          break;
        case "indoor":
          handleEditIndoorUnitCategory(editingItem._id, formData);
          break;
      }
    } else {
      // Add new product
      switch (activeProductType) {
        case "category":
          handleAddCategory(formData);
          break;
        case "featured":
          handleAddFeaturedModel(formData);
          break;
        case "outdoor":
          handleAddOutdoorUnit(formData);
          break;
        case "indoor":
          handleAddIndoorUnitCategory(formData);
          break;
      }
    }
  };

  // Offers CRUD
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/offers`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setOffers(data))
        .catch((err) => console.error("Failed to fetch offers:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddOffer = async (offer) => {
    const res = await fetch(`${API_URL}/api/admin/offers`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(offer),
    });
    const newOffer = await res.json();
    setOffers([...offers, newOffer]);
  };

  const handleEditOffer = async (id, updates) => {
    const res = await fetch(`${API_URL}/api/admin/offers/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    const updated = await res.json();
    setOffers(offers.map((offer) => (offer._id === id ? updated : offer)));
  };

  const handleDeleteOffer = async (id) => {
    await fetch(`${API_URL}/api/admin/offers/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setOffers(offers.filter((offer) => offer._id !== id));
  };

  // Services CRUD
  const [services, setServices] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/services`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setServices(data))
        .catch((err) => console.error("Failed to fetch services:", err));
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddService = async (service) => {
    const res = await fetch(`${API_URL}/api/admin/services`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(service),
    });
    const newService = await res.json();
    setServices([...services, newService]);
  };

  const handleEditService = async (id, updates) => {
    const res = await fetch(`${API_URL}/api/admin/services/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    const updated = await res.json();
    setServices(
      services.map((service) => (service._id === id ? updated : service))
    );
  };

  const handleDeleteService = async (id) => {
    await fetch(`${API_URL}/api/admin/services/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setServices(services.filter((service) => service._id !== id));
  };

  // Service handlers for dialog
  const handleAddServiceDialog = () => {
    setEditingItem(null);
    setIsServiceDialogOpen(true);
  };

  const handleEditServiceDialog = (service) => {
    setEditingItem(service);
    setIsServiceDialogOpen(true);
  };

  const handleServiceSubmit = (formData) => {
    if (editingItem) {
      handleEditService(editingItem._id, formData);
    } else {
      handleAddService(formData);
    }
  };

  // Technology Highlights CRUD
  const [technologyHighlights, setTechnologyHighlights] = useState([]);
  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/api/admin/products/technology-highlights`, {
        headers: getAuthHeaders(),
      })
        .then((res) => res.json())
        .then((data) => setTechnologyHighlights(data))
        .catch((err) =>
          console.error("Failed to fetch technology highlights:", err)
        );
    }
  }, [API_URL, token, getAuthHeaders]);

  const handleAddTechnologyHighlight = async (highlight) => {
    const res = await fetch(
      `${API_URL}/api/admin/products/technology-highlights`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(highlight),
      }
    );
    const newHighlight = await res.json();
    setTechnologyHighlights([...technologyHighlights, newHighlight]);
  };

  const handleEditTechnologyHighlight = async (id, updates) => {
    const res = await fetch(
      `${API_URL}/api/admin/products/technology-highlights/${id}`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      }
    );
    const updated = await res.json();
    setTechnologyHighlights(
      technologyHighlights.map((highlight) =>
        highlight._id === id ? updated : highlight
      )
    );
  };

  const handleDeleteTechnologyHighlight = async (id) => {
    await fetch(`${API_URL}/api/admin/products/technology-highlights/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    setTechnologyHighlights(
      technologyHighlights.filter((highlight) => highlight._id !== id)
    );
  };

  // Home Product handlers
  const handleAddHomeProduct = () => {
    setEditingItem(null);
    setIsHomeProductDialogOpen(true);
  };

  const handleEditHomeProduct = (item) => {
    setEditingItem(item);
    setIsHomeProductDialogOpen(true);
  };

  const handleDeleteHomeProduct = (id) => {
    switch (activeHomeProductType) {
      case "categories":
        handleDeleteCategory(id);
        break;
      case "featured":
        handleDeleteFeaturedModel(id);
        break;
      case "technology":
        handleDeleteTechnologyHighlight(id);
        break;
    }
  };

  const handleHomeProductSubmit = (formData) => {
    if (editingItem) {
      // Edit existing home product
      switch (activeHomeProductType) {
        case "categories":
          handleEditCategory(editingItem._id, formData);
          break;
        case "featured":
          handleEditFeaturedModel(editingItem._id, formData);
          break;
        case "technology":
          handleEditTechnologyHighlight(editingItem._id, formData);
          break;
      }
    } else {
      // Add new home product
      switch (activeHomeProductType) {
        case "categories":
          handleAddCategory(formData);
          break;
        case "featured":
          handleAddFeaturedModel(formData);
          break;
        case "technology":
          handleAddTechnologyHighlight(formData);
          break;
      }
    }
  };

  // Analytics mock data
  const analytics = {
    totalVisitors: 12500,
    totalInquiries: 450,
    conversionRate: 3.6,
    revenue: 125000,
    topProducts: [
      { name: "Daikin FTKP35TV16U", sales: 45 },
      { name: "Daikin FTKF50TV16U", sales: 32 },
      { name: "Daikin FTKF60TV16U", sales: 28 },
    ],
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = "blue" }) => (
    <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {trend && (
            <p className="text-sm text-green-400 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              {trend}% this month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-500/20`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );

  const AddEditDialog = ({ isOpen, onClose, type, item = null }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {item ? `Edit ${type}` : `Add New ${type}`}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {type === "offer" && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-foreground">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter offer title"
                  defaultValue={item?.title}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-foreground">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter description"
                  defaultValue={item?.description}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="validUntil" className="text-foreground">
                  Valid Until
                </Label>
                <Input
                  id="validUntil"
                  type="date"
                  defaultValue={item?.validUntil}
                />
              </div>
            </>
          )}

          {type === "product" && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="model" className="text-foreground">
                  Model
                </Label>
                <Input
                  id="model"
                  placeholder="Enter model name"
                  defaultValue={item?.model}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category" className="text-foreground">
                  Category
                </Label>
                <Select defaultValue={item?.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Split AC">Split AC</SelectItem>
                    <SelectItem value="Cassette AC">Cassette AC</SelectItem>
                    <SelectItem value="VRV System">VRV System</SelectItem>
                    <SelectItem value="Commercial Unit">
                      Commercial Unit
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="originalPrice" className="text-foreground">
                    Original Price
                  </Label>
                  <Input
                    id="originalPrice"
                    placeholder="₹00,000"
                    defaultValue={item?.originalPrice}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="offerPrice" className="text-foreground">
                    Offer Price
                  </Label>
                  <Input
                    id="offerPrice"
                    placeholder="₹00,000"
                    defaultValue={item?.offerPrice}
                  />
                </div>
              </div>
            </>
          )}

          {type === "service" && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="serviceTitle" className="text-foreground">
                  Service Title
                </Label>
                <Input
                  id="serviceTitle"
                  placeholder="Enter service title"
                  defaultValue={item?.title}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="serviceDescription" className="text-foreground">
                  Description
                </Label>
                <Textarea
                  id="serviceDescription"
                  placeholder="Enter description"
                  defaultValue={item?.description}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="price" className="text-foreground">
                    Price
                  </Label>
                  <Input
                    id="price"
                    placeholder="₹0000"
                    defaultValue={item?.price}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration" className="text-foreground">
                    Duration
                  </Label>
                  <Input
                    id="duration"
                    placeholder="1-2 hours"
                    defaultValue={item?.duration}
                  />
                </div>
              </div>
            </>
          )}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />

      <main className="pt-20 px-6 lg:px-8">
        <div className="container mx-auto py-8">
          {/* Admin Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/70">
                Welcome back, {admin?.name || admin?.username}! Manage your AC
                business operations
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Tabs Navigation */}
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="home-products"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Home Products
              </TabsTrigger>
              <TabsTrigger
                value="offers"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <Star className="w-4 h-4 mr-2" />
                Offers
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Products
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <Users className="w-4 h-4 mr-2" />
                Services
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Visitors"
                  value={analytics.totalVisitors.toLocaleString()}
                  icon={Eye}
                  trend={12.5}
                  color="blue"
                />
                <StatCard
                  title="Inquiries"
                  value={analytics.totalInquiries}
                  icon={Users}
                  trend={8.2}
                  color="green"
                />
                <StatCard
                  title="Conversion Rate"
                  value={`${analytics.conversionRate}%`}
                  icon={TrendingUp}
                  trend={2.1}
                  color="purple"
                />
                <StatCard
                  title="Revenue"
                  value={`₹${analytics.revenue.toLocaleString()}`}
                  icon={BarChart3}
                  trend={15.3}
                  color="orange"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button
                      className="w-full justify-start"
                      onClick={() => setActiveTab("offers")}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Offer
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => setActiveTab("products")}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Product
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => setActiveTab("services")}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Service
                    </Button>
                  </div>
                </Card>

                {/* Top Products */}
                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Top Selling Products
                  </h3>
                  <div className="space-y-3">
                    {analytics.topProducts.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                      >
                        <span className="text-white">{product.name}</span>
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white"
                        >
                          {product.sales} sales
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Home Products Tab */}
            <TabsContent value="home-products" className="space-y-6">
              <AdminHomeProducts
                productCategories={productCategories}
                featuredModels={featuredModels}
                technologyHighlights={technologyHighlights}
                onAddProduct={handleAddHomeProduct}
                onEditProduct={handleEditHomeProduct}
                onDeleteProduct={handleDeleteHomeProduct}
                activeType={activeHomeProductType}
                setActiveType={setActiveHomeProductType}
              />

              <HomeProductDialog
                isOpen={isHomeProductDialogOpen}
                onClose={() => setIsHomeProductDialogOpen(false)}
                onSubmit={handleHomeProductSubmit}
                initialData={editingItem}
                type={activeHomeProductType}
              />
            </TabsContent>

            {/* Offers Tab */}
            <TabsContent value="offers" className="space-y-6">
              <AdminOffers
                offers={offers}
                onAddOffer={handleAddOffer}
                onEditOffer={handleEditOffer}
                onDeleteOffer={handleDeleteOffer}
              />
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-6">
              <AdminProducts
                productCategories={productCategories}
                featuredModels={featuredModels}
                outdoorUnits={outdoorUnits}
                indoorUnitCategories={indoorUnitCategories}
                onAddProduct={handleAddProduct}
                onEditProduct={handleEditProduct}
                onDeleteProduct={handleDeleteProduct}
                activeType={activeProductType}
                setActiveType={setActiveProductType}
              />

              <ProductDialog
                isOpen={isProductDialogOpen}
                onClose={() => setIsProductDialogOpen(false)}
                onSubmit={handleProductSubmit}
                initialData={editingItem}
                type={activeProductType}
              />
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <AdminServices
                services={services}
                onAddService={handleAddServiceDialog}
                onEditService={handleEditServiceDialog}
                onDeleteService={handleDeleteService}
              />

              <ServiceDialog
                isOpen={isServiceDialogOpen}
                onClose={() => setIsServiceDialogOpen(false)}
                onSubmit={handleServiceSubmit}
                initialData={editingItem}
              />
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Analytics & Reports
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Monthly Performance
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Visitors</span>
                      <span>+12.5%</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Inquiries</span>
                      <span>+8.2%</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Conversions</span>
                      <span>+2.1%</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Revenue Breakdown
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Product Sales</span>
                      <span>₹95,000</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Services</span>
                      <span>₹30,000</span>
                    </div>
                    <div className="flex justify-between text-white font-semibold border-t border-white/20 pt-2">
                      <span>Total</span>
                      <span>₹1,25,000</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Customer Insights
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>New Customers</span>
                      <span>125</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Repeat Customers</span>
                      <span>89</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Avg. Order Value</span>
                      <span>₹45,500</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
