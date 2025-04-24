"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  Avatar,
  IconButton,
  Button,
  InputAdornment,
  Pagination,
  LinearProgress,
  AppBar,
  Toolbar,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import {
  ThumbUp,
  ThumbDown,
  RemoveCircleOutline,
  Search,
  FilterList,
  Sort,
  CalendarMonth,
  Language,
  MoreVert,
  Refresh,
  InsertChart,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Create custom theme based on the RepTrack teal/blue color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2c6e8e",
      light: "#4a8dac",
      dark: "#1e4e64",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5cbfce",
      light: "#7dcfdc",
      dark: "#3d9eac",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f7f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#546e7a",
    },
    success: {
      main: "#4caf50",
      light: "#80e27e",
      dark: "#087f23",
    },
    warning: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
    },
    error: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#2c3e50",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      color: "#2c3e50",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      color: "#2c3e50",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#2c3e50",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#2c3e50",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      color: "#2c3e50",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

// Sample data for comments
const sampleComments = [
  {
    id: 1,
    author: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-15",
    content:
      "I absolutely love this product! It has exceeded all my expectations and the customer service was excellent.",
    sentiment: "positive",
    source: "Facebook",
    platform: "social",
    likes: 24,
    replies: 3,
  },
  {
    id: 2,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-14",
    content:
      "The service was okay, but I expected more features for the price I paid.",
    sentiment: "neutral",
    source: "Google Review",
    platform: "review",
    likes: 5,
    replies: 1,
  },
  {
    id: 3,
    author: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-13",
    content:
      "Terrible experience. The product broke after just two days and customer support was unresponsive.",
    sentiment: "negative",
    source: "Twitter",
    platform: "social",
    likes: 0,
    replies: 7,
  },
  {
    id: 4,
    author: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-12",
    content:
      "Great value for money. I would definitely recommend this to my friends and family.",
    sentiment: "positive",
    source: "Trustpilot",
    platform: "review",
    likes: 18,
    replies: 0,
  },
  {
    id: 5,
    author: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-11",
    content:
      "Not sure if this was worth the investment. Some features are good but others need improvement.",
    sentiment: "neutral",
    source: "YouTube",
    platform: "social",
    likes: 7,
    replies: 2,
  },
  {
    id: 6,
    author: "Jennifer Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-10",
    content: "Worst purchase I've ever made. Avoid this company at all costs!",
    sentiment: "negative",
    source: "Yelp",
    platform: "review",
    likes: 3,
    replies: 5,
  },
  {
    id: 7,
    author: "Robert Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-09",
    content:
      "I've been using this for a month now and I'm very satisfied with the results.",
    sentiment: "positive",
    source: "Instagram",
    platform: "social",
    likes: 42,
    replies: 8,
  },
  {
    id: 8,
    author: "Lisa Anderson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-08",
    content: "The product is fine but the shipping took longer than expected.",
    sentiment: "neutral",
    source: "Amazon",
    platform: "review",
    likes: 9,
    replies: 1,
  },
  {
    id: 9,
    author: "Thomas Martin",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-07",
    content:
      "Disappointed with the quality. Not as advertised and feels cheaply made.",
    sentiment: "negative",
    source: "Facebook",
    platform: "social",
    likes: 2,
    replies: 4,
  },
  {
    id: 10,
    author: "Jessica White",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-06",
    content:
      "Excellent product and fast delivery. Will definitely buy from this company again!",
    sentiment: "positive",
    source: "Google Review",
    platform: "review",
    likes: 31,
    replies: 2,
  },
  {
    id: 11,
    author: "Kevin Harris",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-05",
    content: "It's alright. Does what it says but nothing special.",
    sentiment: "neutral",
    source: "Twitter",
    platform: "social",
    likes: 4,
    replies: 0,
  },
  {
    id: 12,
    author: "Amanda Clark",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-04",
    content:
      "Horrible customer service. They refused to honor their return policy.",
    sentiment: "negative",
    source: "Trustpilot",
    platform: "review",
    likes: 8,
    replies: 6,
  },
];

// Styled components
const SentimentChip = styled(Chip)(({ theme, sentiment }) => ({
  fontWeight: "bold",
  backgroundColor:
    sentiment === "positive"
      ? theme.palette.success.light
      : sentiment === "negative"
        ? theme.palette.error.light
        : theme.palette.warning.light,
  color:
    sentiment === "positive"
      ? theme.palette.success.contrastText
      : sentiment === "negative"
        ? theme.palette.error.contrastText
        : theme.palette.warning.contrastText,
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
}));

const CommentCard = styled(Card)(({ theme, sentiment }) => ({
  marginBottom: theme.spacing(2),
  borderLeft: `4px solid ${
    sentiment === "positive"
      ? theme.palette.success.main
      : sentiment === "negative"
        ? theme.palette.error.main
        : theme.palette.warning.main
  }`,
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
}));

const FilterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
}));

const AnalyzeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 600,
  padding: "10px 24px",
  borderRadius: 8,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 2),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  color: theme.palette.primary.dark,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  maxWidth: 800,
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
}));

export const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    sentiment: "all",
    source: "all",
    platform: "all",
    dateRange: "all",
  });
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const commentsPerPage = 5;

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Load comments
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setComments(sampleComments);
      setFilteredComments(sampleComments);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and sort comments
  useEffect(() => {
    let result = [...comments];

    // Apply search
    if (searchTerm) {
      result = result.filter(
        (comment) =>
          comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.sentiment !== "all") {
      result = result.filter(
        (comment) => comment.sentiment === filters.sentiment
      );
    }

    if (filters.source !== "all") {
      result = result.filter((comment) => comment.source === filters.source);
    }

    if (filters.platform !== "all") {
      result = result.filter(
        (comment) => comment.platform === filters.platform
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === "likes") {
        return sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes;
      } else if (sortBy === "replies") {
        return sortOrder === "asc"
          ? a.replies - b.replies
          : b.replies - a.replies;
      }
      return 0;
    });

    setFilteredComments(result);
  }, [comments, searchTerm, filters, sortBy, sortOrder]);

  // Calculate statistics
  const stats = {
    total: filteredComments.length,
    positive: filteredComments.filter((c) => c.sentiment === "positive").length,
    negative: filteredComments.filter((c) => c.sentiment === "negative").length,
    neutral: filteredComments.filter((c) => c.sentiment === "neutral").length,
  };

  // Get current page comments
  const indexOfLastComment = page * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // Change page
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Get unique sources for filter dropdown
  const sources = [...new Set(comments.map((comment) => comment.source))];

  // Get unique platforms for filter dropdown
  const platforms = [...new Set(comments.map((comment) => comment.platform))];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <HeroSection my={8}>
          <Container maxWidth="lg">
            <HeroTitle variant="h1">
              Know What People Are Saying About Your Business
            </HeroTitle>
            <HeroSubtitle variant="subtitle1">
              Monitor, analyze, and improve your online reputation with our
              powerful analytics platform
            </HeroSubtitle>
          </Container>
        </HeroSection>

        <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
          {/* Stats Cards */}
          {/* <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <StatsCard elevation={0}>
                <StatValue>5M+</StatValue>
                <StatLabel>Websites Analyzed</StatLabel>
              </StatsCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatsCard elevation={0}>
                <StatValue>98%</StatValue>
                <StatLabel>Customer Satisfaction</StatLabel>
              </StatsCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatsCard elevation={0}>
                <StatValue>24/7</StatValue>
                <StatLabel>Real-time Monitoring</StatLabel>
              </StatsCard>
            </Grid>
          </Grid> */}

          {/* Sentiment Distribution */}
          <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <InsertChart sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: theme.palette.primary.main }}
              >
                Sentiment Analysis
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="body2" sx={{ width: 100, fontWeight: 500 }}>
                Positive:
              </Typography>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={stats.total ? (stats.positive / stats.total) * 100 : 0}
                  color="success"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ minWidth: 80, textAlign: "right" }}
              >
                {stats.positive} (
                {stats.total
                  ? Math.round((stats.positive / stats.total) * 100)
                  : 0}
                %)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="body2" sx={{ width: 100, fontWeight: 500 }}>
                Neutral:
              </Typography>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={stats.total ? (stats.neutral / stats.total) * 100 : 0}
                  color="warning"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ minWidth: 80, textAlign: "right" }}
              >
                {stats.neutral} (
                {stats.total
                  ? Math.round((stats.neutral / stats.total) * 100)
                  : 0}
                %)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ width: 100, fontWeight: 500 }}>
                Negative:
              </Typography>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={stats.total ? (stats.negative / stats.total) * 100 : 0}
                  color="error"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ minWidth: 80, textAlign: "right" }}
              >
                {stats.negative} (
                {stats.total
                  ? Math.round((stats.negative / stats.total) * 100)
                  : 0}
                %)
              </Typography>
            </Box>
          </Paper>

          {/* Search and Filters */}
          <FilterPaper elevation={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Search comments"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Button
                    variant="outlined"
                    startIcon={<FilterList />}
                    onClick={() =>
                      setFilters({
                        sentiment: "all",
                        source: "all",
                        platform: "all",
                        dateRange: "all",
                      })
                    }
                    sx={{ borderRadius: 2 }}
                  >
                    Reset Filters
                  </Button>
                  <AnalyzeButton
                    variant="contained"
                    startIcon={<Refresh />}
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                      }, 500);
                    }}
                  >
                    Analyze
                  </AnalyzeButton>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Sentiment</InputLabel>
                  <Select
                    value={filters.sentiment}
                    onChange={(e) =>
                      setFilters({ ...filters, sentiment: e.target.value })
                    }
                    label="Sentiment"
                    startAdornment={
                      <InputAdornment position="start">
                        {filters.sentiment === "positive" ? (
                          <ThumbUp fontSize="small" />
                        ) : filters.sentiment === "negative" ? (
                          <ThumbDown fontSize="small" />
                        ) : filters.sentiment === "neutral" ? (
                          <RemoveCircleOutline fontSize="small" />
                        ) : null}
                      </InputAdornment>
                    }
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="all">All Sentiments</MenuItem>
                    <MenuItem value="positive">Positive</MenuItem>
                    <MenuItem value="neutral">Neutral</MenuItem>
                    <MenuItem value="negative">Negative</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Source</InputLabel>
                  <Select
                    value={filters.source}
                    onChange={(e) =>
                      setFilters({ ...filters, source: e.target.value })
                    }
                    label="Source"
                    startAdornment={
                      <InputAdornment position="start">
                        <Language fontSize="small" />
                      </InputAdornment>
                    }
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="all">All Sources</MenuItem>
                    {sources.map((source) => (
                      <MenuItem key={source} value={source}>
                        {source}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Platform Type</InputLabel>
                  <Select
                    value={filters.platform}
                    onChange={(e) =>
                      setFilters({ ...filters, platform: e.target.value })
                    }
                    label="Platform Type"
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="all">All Platforms</MenuItem>
                    {platforms.map((platform) => (
                      <MenuItem key={platform} value={platform}>
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    label="Sort By"
                    startAdornment={
                      <InputAdornment position="start">
                        <Sort fontSize="small" />
                      </InputAdornment>
                    }
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="likes">Likes</MenuItem>
                    {/* <MenuItem value="replies">Replies</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FilterPaper>

          {/* Comments List */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              Comments ({filteredComments.length})
            </Typography>
          </Box>

          {loading ? (
            <Box sx={{ width: "100%", mt: 2 }}>
              <LinearProgress sx={{ borderRadius: 5 }} />
            </Box>
          ) : filteredComments.length === 0 ? (
            <Paper
              sx={{ p: 3, textAlign: "center", borderRadius: 3 }}
              elevation={0}
            >
              <Typography variant="body1">
                No comments found matching your criteria.
              </Typography>
            </Paper>
          ) : (
            <>
              {currentComments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  sentiment={comment.sentiment}
                  elevation={0}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        mb: isMobile ? 2 : 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: isMobile ? 2 : 0,
                        }}
                      >
                        <Avatar src={comment.avatar} alt={comment.author} />
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            {comment.author}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            <CalendarMonth
                              fontSize="small"
                              sx={{ verticalAlign: "middle", mr: 0.5 }}
                            />
                            {new Date(comment.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          justifyContent: isMobile ? "flex-start" : "flex-end",
                        }}
                      >
                        <SentimentChip
                          label={
                            comment.sentiment.charAt(0).toUpperCase() +
                            comment.sentiment.slice(1)
                          }
                          sentiment={comment.sentiment}
                          size="small"
                        />
                        <Chip
                          label={comment.source}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </Box>

                    <Typography variant="body1" paragraph sx={{ my: 2 }}>
                      {comment.content}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Chip
                            icon={<ThumbUp fontSize="small" />}
                            label={comment.likes}
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={`${comment.replies} replies`}
                            variant="outlined"
                            size="small"
                          />
                        </Box>
                        <IconButton size="small">
                          <MoreVert />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </CommentCard>
              ))}

              {/* Pagination */}
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 2 }}
              >
                <Pagination
                  count={Math.ceil(filteredComments.length / commentsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
            </>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
