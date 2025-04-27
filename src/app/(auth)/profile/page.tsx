import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarDays,
  CreditCard,
  Download,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { ProfileStats } from "@/components/profile-stats";
import { ProfileActivity } from "@/components/profile-activity";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your profile and account settings",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Profile picture"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-background"
                  />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="sr-only">Change profile picture</span>
                  </Button>
                </div>
                <div className="space-y-1 text-center">
                  <h2 className="text-xl font-bold">Alex Johnson</h2>
                  <p className="text-sm text-muted-foreground">
                    alex.johnson@example.com
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-md bg-muted p-3">
                  <User className="h-5 w-5" />
                  <div className="text-sm font-medium">Profile</div>
                </div>
                <div className="flex items-center gap-3 rounded-md p-3 hover:bg-muted transition-colors">
                  <Settings className="h-5 w-5" />
                  <div className="text-sm font-medium">Settings</div>
                </div>
                <div className="flex items-center gap-3 rounded-md p-3 hover:bg-muted transition-colors">
                  <CreditCard className="h-5 w-5" />
                  <div className="text-sm font-medium">Billing</div>
                </div>
                <div className="flex items-center gap-3 rounded-md p-3 hover:bg-muted transition-colors">
                  <CalendarDays className="h-5 w-5" />
                  <div className="text-sm font-medium">Activity</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                <LogOut className="h-4 w-4" />
                Log out
              </Button>
            </CardFooter>
          </Card>
        </aside>
        <main className="flex-1">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your profile information and how others see you on
                    the site.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Johnson" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="alex.johnson@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Write a short bio about yourself"
                        defaultValue="Product designer and developer based in New York. I enjoy creating user-centric, delightful, and human experiences."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio & Skills</CardTitle>
                  <CardDescription>
                    Showcase your work and skills to others.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        UI Design
                        <button className="ml-1 rounded-full hover:bg-primary/20 h-4 w-4 inline-flex items-center justify-center">
                          ×
                        </button>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        React
                        <button className="ml-1 rounded-full hover:bg-primary/20 h-4 w-4 inline-flex items-center justify-center">
                          ×
                        </button>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        TypeScript
                        <button className="ml-1 rounded-full hover:bg-primary/20 h-4 w-4 inline-flex items-center justify-center">
                          ×
                        </button>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full h-7"
                      >
                        + Add skill
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account settings and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="alexjohnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en-US">English (US)</option>
                      <option value="es-ES">Spanish (Spain)</option>
                      <option value="fr-FR">French (France)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="America/New_York">
                        Eastern Time (US & Canada)
                      </option>
                      <option value="America/Chicago">
                        Central Time (US & Canada)
                      </option>
                      <option value="America/Denver">
                        Mountain Time (US & Canada)
                      </option>
                      <option value="America/Los_Angeles">
                        Pacific Time (US & Canada)
                      </option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password to keep your account secure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Update password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export Data</CardTitle>
                  <CardDescription>
                    Download a copy of your data or delete your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    You can export all your data as a JSON file. This includes
                    your profile information, posts, and comments.
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export data
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" className="w-full">
                    Delete account
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Overview</CardTitle>
                  <CardDescription>
                    View your recent activity and statistics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileStats />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent actions and notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileActivity />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View all activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
