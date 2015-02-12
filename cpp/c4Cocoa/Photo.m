#import "Photo.h"

@implementation Photo

@synthesize caption;
@synthesize photographer;



- (void) setCaption: (NSString*) input {
    [caption autorelease];
    caption = [input retain];
}

- (void) setPhotographer: (NSString*) input {
    [photographer autorelease];
    photographer = input;
}

- (id) init {
    if (self = [super init]) {
        [self setCaption: @"Default Caption"];
        [self setPhotographer: @"Default Photographer"];
    }

    return self;
}

- (void) dealloc {
    self.caption = nil;
    self.photographer = nil;
    [super dealloc];
}

@end
