// Route config interface with Metadata
export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  title?: string;
  description?: string;
  requiresAuth?: boolean;
  children?: RouteConfig[];
  index?: boolean;
}
