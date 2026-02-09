import styles from "./Brewly.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import ProjectPageNav from "../../../_ui/ProjectPageNav/ProjectPageNav";
import SectionDescriptionBox from "../../../_ui/SectionDescriptionBox/SectionDescriptionBox";
import _cardData from "../../../_cardData/_cardData.json";
import CodeSnippetBox from "../../../_ui/CodeSnippetBox/CodeSnippetBox";
import RegButton from "../../../_ui/RegButton/RegButton";

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

  const project_focus_features = [
    "Beer Discovery: Browse beers from the Brew Buddy API with images and details.",
    "Collections: Create and manage custom collections to organize saved beers.",
    "Search & Filter: Find beers by name, ABV, or IBU with a filter dropdown.",
    "Beer Details: View specs (ABV, IBU), descriptions, and add reviews."
  ];

  const project_brewbuddy_api_integration = [
 "A REST API that returns beer data with pagination via `limit` and `offset`.",
   
  ];

  const project_create_collections = ["Users create collections from the Collections page or when saving a beer.","Each collection has a name and stores beer IDs and names.","Data is persisted in `localStorage` as JSON."];
 
//End Goals
const project_end_goals = ["A complete user journey from onboarding and age verification through discovery, search, collections, and profile.","Reliable API integration with loading and error states and consistent data shape across the app.","Reusable UI components (buttons, cards, modals, inputs, navigation) that keep the interface consistent and maintainable.","Persistent user data (collections and reviews) via LocalStorage so choices survive page refreshes."];

  //Search and Filter Functionality
  const project_search_and_filter_functionality = ["Beers are fetched on mount, then filtered client-side based on the selected filter (name, ABV, or IBU) and search query.","Search runs when the user presses Enter.","Guard against duplicates and case-insensitive duplicate collection names."];

  const search_and_filter_functionality_code_snippets = [
    {
      label: "SearchPage.jsx",
      code: `const [filterOption, setFilterOption] = useState("name");
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
`  },
  ];


  //Creating and Storing Beer Collections

  const project_creating_and_storing_beer_collections = ["Implemented `localStorage` to persist beer collections across sessions.","Created a dedicated `collectionsReducer` to handle CRUD operations on collections.","Use functional `setState` so you always work with the latest list.","Guard against duplicates and case-insensitive duplicate collection names."];

  const project_create_collections_code_snippets = [
    {
      label: "Feed.jsx",
      code: `const handleSaveNewCollection = () => {
    if (!newCollectionName.trim()) return;


    const trimmedName = newCollectionName.trim();
    const existingCollections = JSON.parse(localStorage.getItem("collections") || "[]");


    const exists = existingCollections.some(
        (col) => col.collectionName.toLowerCase() === trimmedName.toLowerCase()
    );


    if (exists) {
        setConfirmationMessage(\`A collection with the name "\${trimmedName}" already exists.\`);
        setShowConfirmation(true);
        return;
    }


    const newCollection = { collectionName: trimmedName, beers: [] };
    const updated = [...existingCollections, newCollection];
    localStorage.setItem("collections", JSON.stringify(updated));
    setCollections(updated);
    handleCloseModal();
};`,
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

  // Project Adressing Challenges
  const project_adressing_challenges = [
    "Checking if the collection exists before its created and implementing conversion to lowercase for checking.",
    "Search only runs when the user is ready and clicks enter therefore improving performance and making the interaction feel deliberate and controlled.",
    
  ];

  const project_add_to_collections = ["From a beer's detail page, users tap the favorite button to open a modal.","They can add the beer to an existing collection or create a new one.","A checkmark indicates which collections already contain the beer.","The same action removes the beer if it's already in that collection."];
  const adding_to_collections_code_snippets = [
    {
      label: "BeerCard.jsx",
      code: `const handleAddToExistingCollection = (collectionName) => {
    if (!selectedBeer) return;


    setCollections((prev) => {
        const updatedCollections = prev.map((col) => {
            if (col.collectionName === collectionName) {
                const beerExists = col.beers.some((b) => b.id === selectedBeer.id);
                return beerExists
                    ? { ...col, beers: col.beers.filter((b) => b.id !== selectedBeer.id) }
                    : { ...col, beers: [...col.beers, { id: selectedBeer.id, name: selectedBeer.name }] };
            }
            return col;
        });
        localStorage.setItem("collections", JSON.stringify(updatedCollections));
        return updatedCollections;
    });
};`,
    },
  ];

  const project_challenges = [
    "Making sure there are no duplicate collections and checking case sensitivity.",
    "Filtering beers on every keystroke caused unnecessary re-renders and made the search experience feel jumpy.",
   
  ];

  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />
        <div className={styles.project_overview_container}>
            <div className={styles.project_overview_content}>
            <SectionDescriptionBox title={"Focus Features"} items={project_focus_features} />
            <SectionDescriptionBox title={"BrewBuddy - API Integration"} items={project_brewbuddy_api_integration} />
           
            </div>
            <div className={styles.project_overview_content}>
            <img className={styles.brewly_api_image} src={"/Brewly_Api.png"} alt={"BrewBuddy - API Integration"} />
            </div>
        </div>
     

        {/*Create Collections */}
        <div className={`${styles.project_api_fetching_and_beer_card_integration_video_container} ${styles.brewly_video_section}`}>
          {/* <h2 className={styles.project_api_fetching_and_beer_card_integration_video_title}>Video Demonstration</h2> */}
          <div className={`${styles.placeholder_mockup} ${styles.brewly_video_mockup}`}>
            <video autoPlay muted playsInline loop preload="auto">
              <source src="/Brewly_CreateCollection.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.project_api_fetching_and_beer_card_integration_video_button_container}>
            <RegButton
              type="secondary"
              button_text="Explore WebApp"
              onclick="https://app-brewly.vercel.app/"
            />
          </div>
        </div>

        <div className={styles.project_API_Fetching_container}>
          <SectionDescriptionBox title={"Create Collections"} items={project_create_collections} />
          <CodeSnippetBox tabs={project_create_collections_code_snippets} />
        </div>
        {/* Add to Collections */}
        <div className={styles.project_API_Fetching_container}>
          <SectionDescriptionBox title={"Add to Collections"} items={project_add_to_collections} />
          <CodeSnippetBox tabs={adding_to_collections_code_snippets} />
        </div>
    


        {/* Search and Filter  */}
        <div className={`${styles.project_api_fetching_and_beer_card_integration_video_container} ${styles.brewly_video_section}`}>
          {/* <h2 className={styles.project_api_fetching_and_beer_card_integration_video_title}>Video Demonstration</h2> */}
          <div className={`${styles.placeholder_mockup} ${styles.brewly_video_mockup}`}>
            <video autoPlay muted playsInline loop preload="auto">
              <source src="/Brewly_SearchAndFilter.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.project_api_fetching_and_beer_card_integration_video_button_container}>
            <RegButton
              type="secondary"
              button_text="Explore demo"
              onclick="https://app-brewly.vercel.app/"
            />
          </div>
        </div>
        <div className={styles.project_API_Fetching_container}>
        <CodeSnippetBox tabs={search_and_filter_functionality_code_snippets} />
          <SectionDescriptionBox title={"Search & Filter"} items={project_search_and_filter_functionality} />   
        </div>

        {/* Modal Components */}
        <div className={`${styles.project_api_fetching_and_beer_card_integration_video_container} ${styles.brewly_video_section}`}>
         
          <div className={`${styles.placeholder_mockup} ${styles.brewly_video_mockup}`}>
            <video autoPlay muted playsInline loop preload="auto">
              <source src="/Brewly_ModalView.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.project_api_fetching_and_beer_card_integration_video_button_container}>
            <RegButton
              type="secondary"
              button_text="Explore demo"
              onclick="https://app-brewly.vercel.app/"
            />
          </div>
        </div>
        <div className={styles.project_API_Fetching_container}>
        <CodeSnippetBox tabs={modal_components_code_snippets} />
          <SectionDescriptionBox title={"Modal Components"} items={project_modal_components} />

        </div>

        <div className={styles.project_architecture_and_components_container}>
          <div className={styles.project_architecture_container}><h2 className={styles.project_architecture_title}>Architecture</h2>
          <img className={styles.project_architecture_image} src="/Brewly_Architecture.png" alt="Brewly Architecture" /></div>

          <div className={styles.project_components_container}><h2 className={styles.project_components_title}>Components</h2><img className={styles.project_components_image} src="/Brewly_Components.png" alt="Brewly Components" /></div>
        </div>
        {/* Challenges */}
        <div className={styles.project_goals_container}>
          <SectionDescriptionBox title={"Challenges"} items={project_challenges} />
        </div>
        {/* Solutions */}
        <div className={styles.project_reflection_container}>
          <SectionDescriptionBox title={"Adressing Challenges"} items={project_adressing_challenges} />
        </div>

      <div className="footer_section">
        <ProjectPageNav currentProjectId="Brewly" projects={_cardData} />
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Brewly;