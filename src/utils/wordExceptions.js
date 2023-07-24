const wordExceptions = [
  "anticompetitive",
  "platitudinarian",
  "platitudinizing",
  "platitudinously",
  "postdivestiture",
  "nonquantitative",
  "multitudinously",
  "hassan",
  "hydroxyapatites",
  "hydroxylapatite",
  "institutionally",
  "malpractitioner",
  "latitudinarians",
  "antitraditional",
  "antitheoretical",
  "antituberculous",
  "cholecystitises",
  "competitiveness",
  "counterpetition",
  "constitutionals",
  "excrementitious",
  "featherstitched",
  "featherstitches",
  "destitutenesses",
  "reconstitutions",
  "sacrosanctities",
  "repetitiousness",
  "substitutionary",
  "surreptitiously",
  "superstitiously",
  "subreptitiously",
  "constitutional",
  "hydroxyapatite",
  "latitudinarian",
  "supposititious",
  "substitutively",
  "substitutional",
  "reconstituting",
  "reconstitution",
  "quantitatively",
  "repetitiveness",
  "trisubstituted",
  "interstitially",
  "platitudinized",
  "platitudinizes",
  "pancreatitides",
  "noncompetitors",
  "noncompetition",
  "noncompetitive",
  "constituencies",
  "constitutively",
  "fictitiousness",
  "factitiousness",
  "disquantitying",
  "antithetically",
  "antiterrorists",
  "antiterrorisms",
  "antitechnology",
  "adventitiously",
  "attitudinizing",
  "attitudinising",
  "antitubercular",
  "institutional",
  "superstitious",
  "uncompetitive",
  "surreptitious",
  "multitudinous",
  "antiterrorist",
  "cholecystitis",
  "quadripartite",
  "disubstituted",
  "platitudinize",
  "featherstitch",
  "disquantitied",
  "disquantities",
  "destituteness",
  "competitively",
  "correctitudes",
  "constitutions",
  "constituently",
  "antiterrorism",
  "antithrombins",
  "aptitudinally",
  "backstitching",
  "attitudinised",
  "attitudinally",
  "attitudinized",
  "attitudinises",
  "attitudinizes",
  "platitudinous",
  "prostatitises",
  "practitioners",
  "periostitises",
  "partitionists",
  "multitaskings",
  "multitrillion",
  "noncompetitor",
  "nonidentities",
  "inexactitudes",
  "multitalented",
  "lockstitching",
  "latitudinally",
  "quantitations",
  "reinstituting",
  "reconstituted",
  "reconstitutes",
  "rectitudinous",
  "repetitiously",
  "sacrosanctity",
  "superstitions",
  "substitutable",
  "substitutions",
  "subreptitious",
  "titillatingly",
  "transvestites",
  "whipstitching",
  "constitution",
  "quantitative",
  "practitioner",
  "constituency",
  "substitution",
  "prostitution",
  "superstition",
  "pancreatitis",
  "interstitial",
  "constitutive",
  "antithetical",
  "transvestite",
  "reconstitute",
  "multitasking",
  "adventitious",
  "cementitious",
  "substitutive",
  "multipartite",
  "antitakeover",
  "inexactitude",
  "partitionist",
  "titaniferous",
  "correctitude",
  "attitudinize",
  "adscititious",
  "altitudinous",
  "antithrombin",
  "attitudinise",
  "backstitched",
  "backstitches",
  "bipartitions",
  "antitrusters",
  "antitussives",
  "constituents",
  "constituting",
  "competitions",
  "fictitiously",
  "factitiously",
  "entitlements",
  "deglutitions",
  "dermatitises",
  "destitutions",
  "disentitling",
  "divestitures",
  "petitenesses",
  "prostituting",
  "prostitutors",
  "promptitudes",
  "platitudinal",
  "multitowered",
  "partitioners",
  "partitioning",
  "ingratitudes",
  "incertitudes",
  "institutions",
  "hemstitchers",
  "hemstitching",
  "midlatitudes",
  "lockstitched",
  "lockstitches",
  "jactitations",
  "investitures",
  "titillations",
  "titleholders",
  "topstitching",
  "substituting",
  "spessartites",
  "substituents",
  "stomatitises",
  "stomatitides",
  "reinstituted",
  "reinstitutes",
  "repartitions",
  "quantitating",
  "quantitation",
  "restitutions",
  "repetitively",
  "repetitional",
  "senectitudes",
  "unchastities",
  "whipstitched",
  "whipstitches",
  "competition",
  "competitive",
  "institution",
  "constituent",
  "entitlement",
  "restitution",
  "divestiture",
  "destitution",
  "repetitious",
  "investiture",
  "ingratitude",
  "titleholder",
  "prostatitis",
  "repartition",
  "substituent",
  "deglutition",
  "periostitis",
  "incertitude",
  "antitussive",
  "jactitation",
  "titrimetric",
  "spessartite",
  "senectitude",
  "shergottite",
  "repetitions",
  "restitching",
  "restituting",
  "reinstitute",
  "quantitated",
  "quantitates",
  "pyrrhotites",
  "stalactites",
  "stalactitic",
  "stitchworts",
  "stitcheries",
  "substituted",
  "substitutes",
  "tittivating",
  "topstitched",
  "topstitches",
  "titillative",
  "titivations",
  "titillating",
  "titillation",
  "titanically",
  "unstitching",
  "keratitides",
  "keratitises",
  "latitudinal",
  "midlatitude",
  "multitasked",
  "ineptitudes",
  "instituters",
  "inaptitudes",
  "instituting",
  "institutors",
  "hemstitched",
  "hemstitcher",
  "hepatitides",
  "hemstitches",
  "hepatitises",
  "petitioners",
  "petitioning",
  "partitively",
  "peridotites",
  "peridotitic",
  "prostituted",
  "prostitutes",
  "prostitutor",
  "proctitides",
  "proctitises",
  "promptitude",
  "petitionary",
  "plentitudes",
  "parotitises",
  "partitioned",
  "partitioner",
  "nictitating",
  "nonentities",
  "nonidentity",
  "antitumoral",
  "antitruster",
  "antityphoid",
  "aptitudinal",
  "asphaltites",
  "bipartitely",
  "bipartition",
  "attitudinal",
  "antitarnish",
  "antitobacco",
  "antithyroid",
  "adventitias",
  "adventitial",
  "altitudinal",
  "destituting",
  "disentitled",
  "disentitles",
  "constitute",
  "substitute",
  "competitor",
  "repetition",
  "repetitive",
  "prostitute",
  "fictitious",
  "antithesis",
  "tripartite",
  "dermatitis",
  "ineptitude",
  "multitrack",
  "pyrrhotite",
  "exactitude",
  "stomatitis",
  "quantitate",
  "peridotite",
  "stalactite",
  "factitious",
  "plentitude",
  "adventitia",
  "inaptitude",
  "backstitch",
  "disentitle",
  "whipstitch",
  "stitchwort",
  "asphaltite",
  "antitrades",
  "antitragus",
  "antitoxins",
  "antitheses",
  "antithetic",
  "albertites",
  "argentites",
  "appetitive",
  "antitumors",
  "beatitudes",
  "dietitians",
  "destituted",
  "destitutes",
  "dentitions",
  "fortitudes",
  "enstatites",
  "cystitides",
  "cobaltites",
  "colatitude",
  "carnotites",
  "celestites",
  "cementites",
  "certitudes",
  "chastities",
  "identities",
  "instituted",
  "instituter",
  "institutes",
  "institutor",
  "gratitudes",
  "haematites",
  "helictites",
  "intituling",
  "mistitling",
  "magnetites",
  "lockstitch",
  "mastitides",
  "platitudes",
  "proustites",
  "pegmatites",
  "pegmatitic",
  "pastitsios",
  "partitives",
  "partitions",
  "petitioner",
  "petitioned",
  "petiteness",
  "multitasks",
  "multitudes",
  "nictitated",
  "nictitates",
  "solstitial",
  "sortitions",
  "subtitling",
  "quantities",
  "rectitudes",
  "restitched",
  "restitches",
  "restituted",
  "restitutes",
  "sanctities",
  "titanesses",
  "titillates",
  "titillated",
  "titivating",
  "titivation",
  "titrations",
  "titratable",
  "tittivated",
  "tittivates",
  "tittupping",
  "titularies",
  "institute",
  "multitude",
  "hepatitis",
  "gratitude",
  "partition",
  "antitrust",
  "fortitude",
  "destitute",
  "titration",
  "dietitian",
  "antitumor",
  "magnetite",
  "rectitude",
  "certitude",
  "titillate",
  "nonentity",
  "platitude",
  "dentition",
  "beatitude",
  "keratitis",
  "bipartite",
  "proctitis",
  "pegmatite",
  "antitoxin",
  "stitchery",
  "argentite",
  "antitheft",
  "parotitis",
  "cementite",
  "haematite",
  "celestite",
  "enstatite",
  "restitute",
  "titularly",
  "antitrade",
  "antitoxic",
  "partitive",
  "topstitch",
  "sortition",
  "carnotite",
  "helictite",
  "hemstitch",
  "pettitoes",
  "nictitate",
  "cobaltite",
  "factitive",
  "tittivate",
  "vastitude",
  "tungstite",
  "troostite",
  "vastities",
  "zaratites",
  "titterers",
  "tittering",
  "tittuping",
  "tittupped",
  "titrators",
  "titrating",
  "titivated",
  "titivates",
  "tithonias",
  "titaniums",
  "titanisms",
  "titanites",
  "titanates",
  "smectites",
  "smectitic",
  "smaltites",
  "steatites",
  "steatitic",
  "stitchers",
  "stitching",
  "stithying",
  "surtitles",
  "subtitled",
  "subtitles",
  "retitling",
  "entitling",
  "antitragi",
  "altitudes",
  "albertite",
  "aptitudes",
  "antitypes",
  "antitypic",
  "appetites",
  "attitudes",
  "nictitant",
  "multitone",
  "parotitic",
  "ouistitis",
  "poortiths",
  "proustite",
  "pastitsos",
  "pastitsio",
  "petitions",
  "hematites",
  "hematitic",
  "latitudes",
  "intitling",
  "intituled",
  "identity",
  "attitude",
  "quantity",
  "petition",
  "appetite",
  "altitude",
  "latitude",
  "titanium",
  "aptitude",
  "sanctity",
  "chastity",
  "subtitle",
  "untitled",
  "cystitis",
  "mastitis",
  "hematite",
  "titanate",
  "antitank",
  "titanite",
  "antitype",
  "titmouse",
  "steatite",
  "smectite",
  "intitule",
  "unstitch",
  "smaltite",
  "surtitle",
  "titulary",
  "titanous",
  "titivate",
  "mimetite",
  "mistitle",
  "mastitic",
  "intitled",
  "intitles",
  "pastits",
  "otitises",
  "ouistiti",
  "partitas",
  "nontitle",
  "apatites",
  "biotites",
  "biotitic",
  "bushtits",
  "entitled",
  "entities",
  "entitles",
  "titlarks",
  "tithable",
  "tithings",
  "tithonia",
  "titanism",
  "titanias",
  "titaness",
  "titulars",
  "titterer",
  "titubant",
  "tittuppy",
  "tittuped",
  "titlists",
  "titrants",
  "titrable",
  "titrated",
  "titrates",
  "titrator",
  "tittered",
  "tectites",
  "tektites",
  "tektitic",
  "stithied",
  "stithies",
  "stitches",
  "stitched",
  "stitcher",
  "restitch",
  "retitled",
  "retitles",
  "zaratite",
  "entitle",
  "titanic",
  "titular",
  "titlist",
  "tithing",
  "biotite",
  "titrate",
  "apatite",
  "partite",
  "partita",
  "retitle",
  "tektite",
  "titrant",
  "bushtit",
  "titlark",
  "titians",
  "tithers",
  "titfers",
  "titania",
  "titbits",
  "titmice",
  "titling",
  "titties",
  "titters",
  "tittles",
  "tomtits",
  "tectite",
  "ratites",
  "vastity",
  "antitax",
  "petites",
  "intitle",
  "entity",
  "titled",
  "stitch",
  "petite",
  "otitis",
  "titian",
  "titman",
  "ratite",
  "stithy",
  "tomtit",
  "titfer",
  "titans",
  "tithed",
  "tither",
  "titers",
  "tithes",
  "titmen",
  "titles",
  "title",
  "titres",
  "otitic",
  "title",
  "petit",
  "titer",
  "tithe",
  "titre",
  "titan",
  "assimilationism",
  "assimilationist",
  "associationisms",
  "associativities",
  "associationists",
  "assignabilities",
  "assiduousnesses",
  "assertivenesses",
  "ambassadorships",
  "disembarrassing",
  "disassociations",
  "dispassionately",
  "classifications",
  "counterassaults",
  "compassionately",
  "compassionating",
  "classlessnesses",
  "impassibilities",
  "impassabilities",
  "immunoassayable",
  "impassivenesses",
  "overclassifying",
  "overassessments",
  "uncompassionate",
  "unassailability",
  "thalassocracies",
  "classification",
  "unclassifiable",
  "associationism",
  "associationist",
  "associateships",
  "assistantships",
  "assimilability",
  "assassinations",
  "assaultiveness",
  "ambassadresses",
  "ambassadorship",
  "audiocassettes",
  "assumabilities",
  "classificatory",
  "classicalities",
  "contrabassoons",
  "counterassault",
  "contrabassists",
  "compassionless",
  "compassionates",
  "compassionated",
  "disassociating",
  "disassociation",
  "disembarrassed",
  "disembarrasses",
  "embarrassments",
  "embarrassingly",
  "encompassments",
  "johnsongrasses",
  "impassableness",
  "hardinggrasses",
  "unassumingness",
  "thoroughbasses",
  "videocassettes",
  "weatherglasses",
  "subclassifying",
  "pseudoclassics",
  "overassessment",
  "overclassified",
  "overclassifies",
  "overassertions",
  "neoclassicists",
  "passementeries",
  "passionflowers",
  "passionateness",
  "misclassifying",
  "misassumptions",
  "microcassettes",
  "neoclassicisms",
  "embarrassment",
  "compassionate",
  "assemblywoman",
  "dispassionate",
  "videocassette",
  "audiocassette",
  "neoclassicism",
  "underclassman",
  "unsurpassable",
  "upperclassman",
  "unassimilated",
  "postclassical",
  "unembarrassed",
  "assistantship",
  "passionflower",
  "semiclassical",
  "contrabassoon",
  "passementerie",
  "unimpassioned",
  "thalassocracy",
  "gyrocompasses",
  "glasspapering",
  "impassibility",
  "impassiveness",
  "impassivities",
  "impassability",
  "contrabassist",
  "classlessness",
  "embarrassedly",
  "embarrassable",
  "disassemblies",
  "disassembling",
  "disassociated",
  "disassociates",
  "declassifying",
  "gallowglasses",
  "glassblowings",
  "fiberglassing",
  "encompassment",
  "assimilations",
  "associational",
  "associateship",
  "associativity",
  "associatively",
  "assertiveness",
  "asseverations",
  "assignability",
  "assiduousness",
  "assemblywomen",
  "assemblagists",
  "assassinating",
  "assassination",
  "assassinators",
  "anticlassical",
  "antimacassars",
  "ambassadorial",
  "assurednesses",
  "assortatively",
  "thalassocrats",
  "upperclassmen",
  "unassimilable",
  "unassertively",
  "underclassmen",
  "unassuageable",
  "passivenesses",
  "neoclassicist",
  "nonassociated",
  "nonclassified",
  "overasserting",
  "overassertion",
  "overassertive",
  "microcassette",
  "misassembling",
  "misassumption",
  "misclassified",
  "misclassifies",
  "massivenesses",
  "subassemblies",
  "subclassified",
  "subclassifies",
  "switchgrasses",
  "thalassaemias",
  "pseudoclassic",
  "peppergrasses",
  "reclassifying",
  "reassemblages",
  "reassessments",
  "reassignments",
  "assimilation",
  "unassailable",
  "unclassified",
  "disassociate",
  "unassociated",
  "supermassive",
  "assimilative",
  "thalassaemia",
  "antimacassar",
  "ambassadress",
  "weatherglass",
  "thoroughbass",
  "disembarrass",
  "declassifies",
  "disassembles",
  "detasselling",
  "disassembled",
  "declassified",
  "embarrassing",
  "fricasseeing",
  "glassblowers",
  "glassblowing",
  "encompassing",
  "fiberglassed",
  "fiberglasses",
  "fibreglasses",
  "classicality",
  "classinesses",
  "classicistic",
  "classicizing",
  "classifiable",
  "contrabasses",
  "groundmasses",
  "grasshoppers",
  "glassinesses",
  "glassmakings",
  "glasspapered",
  "glassworkers",
  "goosegrasses",
  "hardinggrass",
  "impassioning",
  "immunoassays",
  "lemongrasses",
  "johnsongrass",
  "jackasseries",
  "assaultively",
  "assassinator",
  "assassinates",
  "assassinated",
  "assentations",
  "assemblagist",
  "assimilators",
  "assimilatory",
  "assimilating",
  "associations",
  "asseverative",
  "assignations",
  "asseverating",
  "asseveration",
  "assumability",
  "assuagements",
  "bromegrasses",
  "bunchgrasses",
  "brassinesses",
  "cassiterites",
  "thalassocrat",
  "unassailably",
  "underclasses",
  "witchgrasses",
  "thalassemics",
  "thalassemias",
  "superclasses",
  "surpassingly",
  "semiclassics",
  "reassurances",
  "reassuringly",
  "reclassified",
  "reclassifies",
  "reassignment",
  "reassessment",
  "reassertions",
  "reassemblies",
  "reassembling",
  "reassemblage",
  "preassembled",
  "preassigning",
  "passageworks",
  "passionately",
  "passivations",
  "nonassertive",
  "nonclassroom",
  "nonpasserine",
  "nonclassical",
  "passacaglias",
  "overclassify",
  "overasserted",
  "neoclassical",
  "misassembled",
  "misassembles",
  "association",
  "unsurpassed",
  "associative",
  "impassioned",
  "assemblyman",
  "assassinate",
  "immunoassay",
  "subassembly",
  "grasshopper",
  "disassemble",
  "assignation",
  "passionless",
  "thalassemia",
  "switchgrass",
  "unassembled",
  "assimilable",
  "passacaglia",
  "misclassify",
  "unassertive",
  "gyrocompass",
  "passagework",
  "cassiterite",
  "peppergrass",
  "assentation",
  "gallowglass",
  "glassblower",
  "gassinesses",
  "encompassed",
  "encompasses",
  "detasseling",
  "detasselled",
  "disassembly",
  "dispassions",
  "embarrassed",
  "embarrasses",
  "compassable",
  "compassions",
  "coassisting",
  "crassnesses",
  "crassitudes",
  "crabgrasses",
  "cordgrasses",
  "cuirassiers",
  "classicists",
  "classicized",
  "classicizes",
  "classicisms",
  "classifying",
  "classifiers",
  "classically",
  "cassowaries",
  "glassworker",
  "glasspapers",
  "glassmakers",
  "glassmaking",
  "glasshouses",
  "impassivity",
  "impassively",
  "hourglasses",
  "harassments",
  "isinglasses",
  "knotgrasses",
  "assemblymen",
  "assemblages",
  "ambassadors",
  "assimilated",
  "assimilates",
  "assimilator",
  "assistances",
  "assoilments",
  "associating",
  "assignments",
  "assiduities",
  "assiduously",
  "assertively",
  "assessments",
  "asseverated",
  "asseverates",
  "carnassials",
  "beargrasses",
  "bentgrasses",
  "bassoonists",
  "bluegrasses",
  "assortative",
  "assortments",
  "assuagement",
  "assumptions",
  "assuredness",
  "preassigned",
  "preassuring",
  "postclassic",
  "reassurance",
  "reassorting",
  "sandglasses",
  "reassailing",
  "reassembled",
  "reassembles",
  "reasserting",
  "reassertion",
  "reassessing",
  "assessment",
  "assistance",
  "assumption",
  "assignment",
  "classified",
  "passionate",
  "ambassador",
  "compassion",
  "assortment",
  "fiberglass",
  "assimilate",
  "assemblage",
  "surpassing",
  "underclass",
  "unassuming",
  "passageway",
  "classicism",
  "unassisted",
  "impassable",
  "reassemble",
  "unassigned",
  "fibreglass",
  "reclassify",
  "classicist",
  "glasshouse",
  "lemongrass",
  "classifier",
  "declassify",
  "assaultive",
  "superclass",
  "dispassion",
  "glassmaker",
  "impassible",
  "groundmass",
  "assumptive",
  "goosegrass",
  "contrabass",
  "massasauga",
  "unassuaged",
  "cuirassier",
  "classicize",
  "bromegrass",
  "brassbound",
  "carnassial",
  "asseverate",
  "glasspaper",
  "glassworks",
  "glassworts",
  "glasswares",
  "glassiness",
  "grassplots",
  "grassroots",
  "grasslands",
  "impassably",
  "impassibly",
  "impassions",
  "harassment",
  "landmasses",
  "lassitudes",
  "madrassahs",
  "massacring",
  "massacrers",
  "classiness",
  "classifies",
  "classicals",
  "chassepots",
  "cassoulets",
  "crevassing",
  "cutgrasses",
  "crassitude",
  "compassing",
  "coassuming",
  "classrooms",
  "classworks",
  "classmates",
  "coassisted",
  "embassages",
  "eelgrasses",
  "declassing",
  "cuirassing",
  "demitasses",
  "detasseled",
  "forepassed",
  "eyeglasses",
  "fricassees",
  "galleasses",
  "fricasseed",
  "galliasses",
  "assessable",
  "assertedly",
  "assertions",
  "assignable",
  "assistants",
  "assonances",
  "assoilment",
  "associated",
  "associates",
  "assaulters",
  "assistant",
  "assurance",
  "classroom",
  "associate",
  "passenger",
  "classical",
  "assertion",
  "encompass",
  "potassium",
  "assertive",
  "assistive",
  "embarrass",
  "casserole",
  "passivity",
  "assailant",
  "grassland",
  "assembler",
  "glassware",
  "classmate",
  "impassive",
  "classless",
  "bluegrass",
  "assiduous",
  "underpass",
  "hourglass",
  "lassitude",
  "sassafras",
  "assonance",
  "cassowary",
  "crabgrass",
  "demitasse",
  "passerine",
  "wineglass",
  "wiregrass",
  "assiduity",
  "cassoulet",
  "glasswork",
  "fricassee",
  "vassalage",
  "assumpsit",
  "brassware",
  "cassation",
  "overclass",
  "passional",
  "cordgrass",
  "madrassah",
  "beargrass",
  "impassion",
  "passivism",
  "passivate",
  "matelasse",
  "thalassic",
  "sargassum",
  "passepied",
  "isinglass",
  "sandglass",
  "glasswort",
  "grassplot",
  "knotgrass",
  "chassepot",
  "embassage",
  "cassimere",
  "cassingle",
  "assurgent",
  "assuasive",
  "paillasse",
  "palliasse",
  "outpassed",
  "outpasses",
  "outgassed",
  "outgasses",
  "passbands",
  "passbooks",
  "passadoes",
  "passaging",
  "passalong",
  "passively",
  "passivist",
  "passingly",
  "passersby",
  "matrasses",
  "massicots",
  "massiness",
  "massively",
  "masscults",
  "masseuses",
  "masseters",
  "misassign",
  "misassays",
  "repassing",
  "reassigns",
  "reasserts",
  "reassumed",
  "reassumes",
  "reassured",
  "reassures",
  "reassorts",
  "repassage",
  "assembly",
  "assuming",
  "password",
  "asserted",
  "assemble",
  "passport",
  "cassette",
  "massacre",
  "classify",
  "reassure",
  "assorted",
  "assassin",
  "assessor",
  "reassess",
  "trespass",
  "sunglass",
  "reassert",
  "assignee",
  "overpass",
  "passable",
  "reassign",
  "molasses",
  "passbook",
  "subclass",
  "spyglass",
  "eyeglass",
  "passerby",
  "landmass",
  "classism",
  "reassume",
  "masseuse",
  "crevasse",
  "sargasso",
  "assignor",
  "basswood",
  "bassinet",
  "windlass",
  "brassica",
  "passband",
  "ryegrass",
  "declasse",
  "outclass",
  "massless",
  "masseter",
  "glassful",
  "glassine",
  "chasseur",
  "eelgrass",
  "assignat",
  "passible",
  "massicot",
  "ribgrass",
  "piassava",
  "sasswood",
  "galleass",
  "galliass",
  "curassow",
  "cutgrass",
  "crassest",
  "classist",
  "classons",
  "classing",
  "coassist",
  "coassume",
  "cassocks",
  "classily",
  "classico",
  "classics",
  "classier",
  "classers",
  "gassiest",
  "gassings",
  "degassed",
  "degasser",
  "degasses",
  "detassel",
  "glassier",
  "glassies",
  "glassily",
  "glassing",
  "glassman",
  "grassier",
  "grassily",
  "grassing",
  "harassed",
  "impasses",
  "hassling",
  "hassocks",
  "hassiums",
  "harasser",
  "harasses",
  "lassoers",
  "lassoing",
  "massaged",
  "massager",
  "massages",
  "madrassa",
  "kolbassi",
  "classes",
  "massive",
  "classic",
  "assumed",
  "passing",
  "passage",
  "passion",
  "assured",
  "assault",
  "passive",
  "embassy",
  "chassis",
  "compass",
  "massage",
  "surpass",
  "biomass",
  "impasse",
  "bassist",
  "carcass",
  "assuage",
  "canvass",
  "bassoon",
  "cassava",
  "cutlass",
  "bagasse",
  "cassock",
  "passkey",
  "masseur",
  "cassino",
  "cassina",
  "hassock",
  "passant",
  "classon",
  "cassata",
  "wassail",
  "wiseass",
  "classis",
  "hassium",
  "assegai",
  "passado",
  "assagai",
  "babassu",
  "cuirass",
  "declass",
  "quassia",
  "cassena",
  "cassaba",
  "cassene",
  "rubasse",
  "subbass",
  "sassaby",
  "passade",
  "oquassa",
  "vinasse",
  "vassals",
  "wrasses",
  "wrassle",
  "trasses",
  "outpass",
  "passels",
  "passers",
  "massier",
  "massing",
  "massifs",
  "matrass",
  "megasse",
  "morassy",
  "sassing",
  "sassily",
  "sassier",
  "sassies",
  "tassies",
  "tassets",
  "tassels",
  "rassled",
  "rassles",
  "quasses",
  "quassin",
  "cassias",
  "cassine",
  "brasses",
  "brassed",
  "biassed",
  "biasses",
  "bassets",
  "bassett",
  "assorts",
  "assurer",
  "assures",
  "assumer",
  "assumes",
  "assuror",
  "asswage",
  "amassed",
  "amasser",
  "amasses",
  "assayed",
  "assume",
  "assist",
  "assess",
  "assure",
  "bypass",
  "assert",
  "assign",
  "hassle",
  "grassy",
  "assent",
  "classy",
  "glassy",
  "harass",
  "morass",
  "lassie",
  "passim",
  "gassed",
  "brassy",
  "massif",
  "vassal",
  "basset",
  "chasse",
  "assail",
  "passel",
  "tassel",
  "cassis",
  "wrasse",
  "gasser",
  "assize",
  "cassia",
  "assort",
  "repass",
  "strass",
  "tassie",
  "passus",
  "dassie",
  "rassle",
  "assets",
  "assais",
  "admass",
  "assays",
  "basses",
  "camass",
  "bassly",
  "bassos",
  "gasses",
  "lasses",
  "lassis",
  "lassos",
  "kavass",
  "jassid",
  "hassel",
  "tasses",
  "tasset",
  "sasses",
  "sassed",
  "passed",
  "passee",
  "passer",
  "passes",
  "masses",
  "massas",
  "massed",
  "megass",
  "class",
  "asset",
  "glass",
  "grass",
  "brass",
  "assay",
  "masse",
  "crass",
  "amass",
  "asses",
  "sassy",
  "passe",
  "massa",
  "lasso",
  "basso",
  "bassi",
  "gassy",
  "massy",
  "tasse",
  "assai",
  "lassi",
  "frass",
  "trass",
  "kvass",
  "eyass",
  "bassy",
  "quass",
  "mass",
  "pass",
  "bass",
  "lass",
  "sass",
  "tass",
  "again",
  "unknown"
  ]

  export default wordExceptions;
  