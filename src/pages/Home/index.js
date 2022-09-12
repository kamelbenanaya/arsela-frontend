import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { ItSupport } from "../../components/itSupport/ItSupport";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import Slider from "../../components/silder/Slider";
import { ProductList } from "../../components/productsList/ProductList";
import { BrandFilter } from "../../components/sidebar/BrandFilter";
import { PriceFilter } from "../../components/sidebar/PriceFilter";
import { CategoriesFilter } from "../../components/sidebar/CategoriesFilter";

const getCategories = async () => {
  const response = await axios.get("http://localhost:3001/api/v1/categories/");
  return response.data.data;
};
const getBrands = async () => {
  const response = await axios.get("http://localhost:3001/api/v1/brands/");
  return response.data.data;
};
const getProducts = async () => {
  const response = await axios.get("http://localhost:3001/api/v1/products/");
  return response.data.data;
};
const getProductsFiltred = async ({ queryKey }) => {
  console.log(
    "🚀 ~ file: App.js ~ line 25 ~ getProductsFiltred ~ queryKey",
    queryKey
  );

  const { brand, category, min, max } = queryKey[1];
  const response = await axios.get("http://localhost:3001/api/v1/products/", {
    params: { brand, category, min, max },
  });
  return response.data.data;
};
const UsegetProductsFiltred = (data) => {
  return useQuery(["getProductsFiltred", data], (data) =>
    getProductsFiltred(data)
  );
};
function App() {
  const [filter, setFiltred] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);
  const [priceRangeState, setPriceRangeState] = useState([0, 5000]);
  const [productsList, setproductsList] = useState([]);
  const {
    isLoading: isloadingBrands,
    data: dataBrands,
    error: errorBrands,
  } = useQuery(["getBrands"], getBrands);

  const {
    isLoading: filtredisLoading,
    data: datafiltred,
    error: errorFiltred,
    refetch,
  } = UsegetProductsFiltred(filter);

  const {
    isLoading: isLoadingCategories,
    data: dataCategories,
    error: errorCategories,
  } = useQuery(["getCategories"], getCategories);

  const { isLoading, data, error } = useQuery(["getProducts"], getProducts);
  const onSubmit = async () => {
    var markchecked = brands?.filter((e) => e.checked === true);
    var categoriesChecked = categoriesState?.filter((e) => e.checked === true);
    var minpricechecked = priceRangeState[0];
    var maxpricechecked = priceRangeState[1];
    console.log("test14", categoriesChecked);
    const brandsIds = [];
    const categoriesIds = [];
    categoriesChecked &&
      categoriesChecked.map((e) => {
        categoriesIds.push(e.id);
      });

    markchecked &&
      markchecked.map((e) => {
        brandsIds.push(e.id);
      });
    console.log(
      "🚀 ~ file: Sidebar.js ~ line 21 ~ onSubmit ~ brandsIds",
      brandsIds
    );
    console.log(
      "🚀 ~ file: App.js ~ line 85 ~ onSubmit ~ categoriesIds",
      categoriesIds
    );
    setFiltred({
      brand: brandsIds,
      category: categoriesIds,
      min: minpricechecked,
      max: maxpricechecked,
    });
  };

  const resetOnSubmit = () => {
    let newmarksState = brands;
    brands.map((e, index) => {
      newmarksState[index].checked = false;
    });
    setBrands([...newmarksState]);

    let newcategoriesState = categoriesState;
    categoriesState.map((e, index) => {
      newcategoriesState[index].checked = false;
    });
    setCategoriesState([...newcategoriesState]);
    let newpriceRangeState = priceRangeState;
    priceRangeState.map((e, index) => {
      newpriceRangeState = [0, 5000];
    });
    setPriceRangeState([...newpriceRangeState]);
    setproductsList(data);
  };
  useEffect(() => {
    if (datafiltred) {
      setproductsList(datafiltred);
    }
  }, [datafiltred]);

  useEffect(() => {
    refetch();
  }, [filter]);

  useEffect(() => {
    console.log("categoriesState", categoriesState);
  }, [categoriesState]);

  useEffect(() => {
    console.log("brandsstate", brands);
  }, [brands]);

  useEffect(() => {
    if (dataBrands && dataBrands.length > 0) {
      const list = [];
      dataBrands.map((e) => {
        list.push({ id: e._id, name: e.name, checked: false });
      });
      setBrands(list);
    }
  }, [dataBrands]);

  useEffect(() => {
    if (dataCategories && dataCategories.length > 0) {
      const list = [];
      dataCategories.map((e) => {
        list.push({ id: e._id, name: e.name, checked: false });
      });
      setCategoriesState(list);
    }
  }, [dataCategories]);

  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="app-container ">
        <div className="sidebar">
          <Sidebar onSubmit={onSubmit} onReset={resetOnSubmit}>
            
            <BrandFilter brands={brands} setBrands={setBrands} />
            <PriceFilter
              priceRangeState={priceRangeState}
              setPriceRangeState={setPriceRangeState}
            />
            <CategoriesFilter
              categoriesState={categoriesState}
              setCategoriesState={setCategoriesState}
            />
          </Sidebar>
        </div>
        <div className="beforecard">
          <ProductList
            productsList={productsList}
            setproductsList={setproductsList}
            isLoading={isLoading}
            data={data}
            error={error}
            resetOnSubmit={resetOnSubmit}
          />
          <ItSupport />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
