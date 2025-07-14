/**
 * Tabs Component Usage
 *
 * Import: import { Tabs, TabsList, TabsTrigger, TabsContent } from 'cij-snipes';
 *
 * Basic usage:
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">
 *     Content for tab 1
 *   </TabsContent>
 *   <TabsContent value="tab2">
 *     Content for tab 2
 *   </TabsContent>
 * </Tabs>
 *
 * With custom styling:
 * <Tabs defaultValue="home" className="w-full">
 *   <TabsList className="grid w-full grid-cols-3">
 *     <TabsTrigger value="home">Home</TabsTrigger>
 *     <TabsTrigger value="about">About</TabsTrigger>
 *     <TabsTrigger value="contact">Contact</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="home">Home content</TabsContent>
 *   <TabsContent value="about">About content</TabsContent>
 *   <TabsContent value="contact">Contact content</TabsContent>
 * </Tabs>
 *
 * Components: Tabs (root), TabsList (container), TabsTrigger (tab button), TabsContent (tab panel)
 * Built on Radix UI - supports all Radix Tabs props
 */
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
