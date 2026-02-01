import styles from "./Brewly.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import connectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import SectionDescriptionBox from "../../../_ui/SectionDescriptionBox/SectionDescriptionBox";
import _cardData from "../../../_cardData/_cardData.json";
import CodeSnippetBox from "../../../_ui/CodeSnippetBox/CodeSnippetBox";

function Brewly() {
  const project = _cardData.find((p) => p.id === "Brewly");

  const project_code_snippets = [
    {
      label: "BeerApi.js",
      code: `const API_BASE_URL = "https://brewbuddy.dev/api/v1/beers";

export const fetchBeers = async (params = {}) => {
   const queryParams = new URLSearchParams();
   if (params.per_page) queryParams.append("limit", params.per_page);
   if (params.page)
       queryParams.append(
           "offset",
           (params.page - 1) * (params.per_page || 25),
       );
   const url = \`\${API_BASE_URL}\${queryParams.toString() ? \`?\${queryParams.toString()}\` : ""}\`;
   return await fetchAPI(url);
};


export const transformBeerData = (beer) => {
   const englishTranslation =
       beer.translations?.find((t) => t.language?.code === "en") ||
       beer.translations?.[0] ||
       {};
   return {
       id: beer.id,
       name: beer.name,
       brewery:
           beer.brewery?.name ||
           englishTranslation.slogan ||
           "Unknown Brewery",
       tagline: englishTranslation.slogan || "",
       description: englishTranslation.description || "",
       image: beer.image?.url || null,
       abv: beer.abv,
       ibu: beer.ibu,
       srm: beer.srm,
       firstBrewed: beer.released_year?.toString() || null,
   };
};`,
    },
    {
      label: "Feed.js",
      code: `// Feed.jsx — Load beers and pass to BeerCard
useEffect(() => {
   const loadBeers = async () => {
       try {
           setLoading(true);
           const data = await fetchBeers({ per_page: 50, page: 1 });
           const transformedBeers = data.map(transformBeerData);
           setBeers(transformedBeers);
       } catch (err) {
           setError(\`Error while fetching beers: \${err.message}\`);
       } finally {
           setLoading(false);
       }
   };
   loadBeers();
}, []);`,
    },
  ];

  const project_major_challenges = [
    "Functionality for performing the four CRUD operations: create, delete, retrieve, and update.",
    "Finding a free open source API that contains range of parameters to integrate into Brewly",
    "Navigation between the different views and fetching data from an external API.",
    "Developed using React’s component-based structure, that is modular and scalable."
  ];

  const project_brewbuddy_api_integration = [
 "A REST API that returns beer data with pagination via `limit` and `offset`.",
   
  ];

  const project_api_fetching_and_beer_card_integration = ["Centralize API logic in a service layer","Normalize API responses (translations, nulls) so the UI always gets a consistent shape","Use `try/catch` + loading/error state so the app never fails silently."];
 
//End Goals
const project_end_goals = ["A complete user journey from onboarding and age verification through discovery, search, collections, and profile.","Reliable API integration with loading and error states and consistent data shape across the app.","Reusable UI components (buttons, cards, modals, inputs, navigation) that keep the interface consistent and maintainable.","Persistent user data (collections and reviews) via LocalStorage so choices survive page refreshes."];

  //Search and Filter Functionality
  const project_search_and_filter_functionality = ["Separate controlled input (`searchTerm`) from “committed” query (`searchQuery`) so filtering runs on Enter, not every keystroke.","Get `filteredBeers` from state so the list stays in sync without extra fetches.","Use `try/catch` + loading/error state so the app never fails silently."];

  const search_and_filter_functionality_code_snippets = [
    {
      label: "SearchPage.jsx",
      code: `// SearchPage.jsx — Filter state and logic
const [filterOption, setFilterOption] = useState("name");
const [searchTerm, setSearchTerm] = useState("");
const [searchQuery, setSearchQuery] = useState("");


const filteredBeers = beers.filter((beer) => {
   const query = searchQuery.toLowerCase();
   if (filterOption === "name") return beer.name.toLowerCase().includes(query);
   if (filterOption === "abv") return beer.abv?.toString().includes(query);
   if (filterOption === "ibu") return beer.ibu?.toString().includes(query);
   return true;
});


const handleKeyDown = (e) => {
   if (e.key === "Enter") setSearchQuery(searchTerm);
};


// Search component receives value, onChange, onKeyDown, onFilterChange
<Search
   value={searchTerm}
   onChange={setSearchTerm}
   placeholder='Search beers...'
   onKeyDown={handleKeyDown}
   onFilterChange={setFilterOption}
/>;`  },
  ];


  //Creating and Storing Beer Collections

  const project_creating_and_storing_beer_collections = ["Implemented `localStorage` to persist beer collections across sessions.","Created a dedicated `collectionsReducer` to handle CRUD operations on collections.","Use functional `setState` so you always work with the latest list.","Guard against duplicates and case-insensitive duplicate collection names."];

  const creating_and_storing_beer_collections_code_snippets = [
    {
      label: "Feed.jsx",
      code: `const handleSaveNewCollection = () => {
   if (!newCollectionName.trim() || !selectedBeer) return;
   const trimmedName = newCollectionName.trim();
   setCollections((prev) => {
       const existing = prev.find(
           (c) => c.collectionName.toLowerCase() === trimmedName.toLowerCase(),
       );
       let updatedCollections;
       if (existing) {
           if (!existing.beers.some((b) => b.id === selectedBeer.id)) {
               existing.beers.push({
                   id: selectedBeer.id,
                   name: selectedBeer.name,
                   image: selectedBeer.image,
                   tagline: selectedBeer.tagline,
                   brewery: selectedBeer.brewery,
               });
           }
           updatedCollections = [...prev];
       } else {
           updatedCollections = [
               ...prev,
               {
                   collectionName: trimmedName,
                   beers: [
                       {
                           id: selectedBeer.id,
                           name: selectedBeer.name,
                           image: selectedBeer.image,
                           tagline: selectedBeer.tagline,
                           brewery: selectedBeer.brewery,
                       },
                   ],
               },
           ];
       }
       localStorage.setItem("collections", JSON.stringify(updatedCollections));
       return updatedCollections;
   });
   setNewCollectionName("");
   handleCloseModal();
};
`,
    },
  ];


  //Modal Components
  const project_modal_components = ["Let the parent control when the modal is open and the children for reusability.","Always provide a clear close affordance so their never stuck , on closing the modals"];

  const modal_components_code_snippets = [
    {
      label: "Modal.jsx",
      code: `function Modal({ children, header, onClose }) {
   return (
       <div className={styles.lower_popup_container}>
           <div
               className={styles.drag_icon_container}
               onClick={onClose}>
               <svg
                   className={styles.drag_icon}
                   width='55'
                   height='7'
                   viewBox='0 0 55 7'
                   fill='none'>
                   <rect
                       x='0.5'
                       width='54'
                       height='7'
                       rx='3.5'
                       fill='#141414'
                   />
               </svg>
           </div>
           <p className={styles.popup_header}>{header}</p>
           <div>{children}</div>
       </div>
   );
}
`,
    },
  ];


  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />
        <div className={styles.project_overview_container}>
            <div className={styles.project_overview_content}>
            <SectionDescriptionBox title={"Major Challenges"} items={project_major_challenges} />
            <SectionDescriptionBox title={"BrewBuddy - API Integration"} items={project_brewbuddy_api_integration} />
           
            </div>
            <div className={styles.project_overview_content}>
            <img className={styles.brewly_api_image} src={"/Brewly_Api.png"} alt={"BrewBuddy - API Integration"} />
            </div>
        </div>

        {/* API Fetching and Beer Card Integration */}
        <div className={styles.project_API_Fetching_container}>
          <SectionDescriptionBox title={"API Fetching and Beer Card Integration"} items={project_api_fetching_and_beer_card_integration} />
          <CodeSnippetBox tabs={project_code_snippets} />
        </div>
        <div className={styles.project_api_fetching_and_beer_card_integration_video_container}>
          <h2 className={styles.project_api_fetching_and_beer_card_integration_video_title}>Video Demonstration</h2>
  <video
            src="/Api_Beercard_Vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            title="Brewly - API Fetching and Beer Card Integration"
          />
</div>
        <div className={styles.project_goals_container}>
          <SectionDescriptionBox title={"End Goals"} items={project_end_goals} />
        </div>


        {/* Search and Filter Functionality */}
        <div className={styles.project_API_Fetching_container}>
        <CodeSnippetBox tabs={search_and_filter_functionality_code_snippets} />
          <SectionDescriptionBox title={"Search and Filter Functionality"} items={project_search_and_filter_functionality} />   
        </div>

{/* Creating and Storing Beer Collections */}

        <div className={styles.project_API_Fetching_container}>
       
          <SectionDescriptionBox title={"Creating and Storing Beer Collections"} items={project_creating_and_storing_beer_collections} />   
          <CodeSnippetBox tabs={creating_and_storing_beer_collections_code_snippets} />
        </div>

        {/* Modal Components */}
        <div className={styles.project_API_Fetching_container}>
        <CodeSnippetBox tabs={modal_components_code_snippets} />
          <SectionDescriptionBox title={"Modal Components"} items={project_modal_components} />
         
        </div>
      <connectBanner />
      <Footer />
    </div>
  );
}

export default Brewly;