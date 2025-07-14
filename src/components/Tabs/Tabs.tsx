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
import { cn } from '../../lib/utils';


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex gap-4 bg-muted/30 p-2 rounded-xl justify-start sm:justify-center flex-wrap',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'group relative px-5 py-3 text-base font-medium rounded-lg',
      'bg-white dark:bg-neutral-900 shadow-sm',
      'hover:bg-blue-50 dark:hover:bg-neutral-800 hover:shadow-md transition-all',
      'text-gray-700 dark:text-gray-200',
      'data-[state=active]:bg-blue-600 dark:data-[state=active]:bg-blue-500',
      'data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-[1.02]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-6 p-6 transition-all animate-fade-in', className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
