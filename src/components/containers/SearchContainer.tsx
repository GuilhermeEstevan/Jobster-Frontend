import { useEffect, useState } from "react";
import { FormRow } from "..";
import { useJobSearchContext } from "../../Context/Job/jobSearchContext";
import Wrapper from "../../assets/wrappers/SearchContainer";
import FormRowSelect from "../Form/FormRowSelect";

const SearchContainer = () => {
  const { jobsFilters, initialFilterState, setJobsFilters, isLoading } =
    useJobSearchContext();
  const {
    jobOptions,
    sortOptions,
    statusOptions,
    searchStatus,
    searchJobType,
    sort,
  } = jobsFilters;
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setJobsFilters({
      ...jobsFilters,
      [name]: value,
    });
  };

  const handleClear = (e: any) => {
    e.preventDefault();
    setLocalSearch("");
    setJobsFilters({ ...jobsFilters, ...initialFilterState });
  };

  useEffect(() => {
    const debounceID = setTimeout(() => {
      // console.log("atualizando");
      setJobsFilters({
        ...jobsFilters,
        search: localSearch,
      });
    }, 1000);
    return () => clearTimeout(debounceID);
  }, [localSearch, jobsFilters]);

  return (
    <Wrapper>
      <form className="form">
        <h4>Formulário de Busca</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={(e) => {
              setLocalSearch(e.target.value);
            }}
            labelText="Procurar Cargo"
          />
          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            list={["todos", ...statusOptions]}
            handleChange={handleSearch}
            labelText="status"
          />
          <FormRowSelect
            name="searchJobType"
            value={searchJobType}
            handleChange={handleSearch}
            list={["todos", ...jobOptions]}
            labelText="Modalidade"
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            labelText="Filtrar"
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleClear}
          >
            Limpar filtros
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
